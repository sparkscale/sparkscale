const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const GMAIL_USER = process.env.GMAIL_USER || functions.config().gmail?.user || "spark.scale01@gmail.com";
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD || functions.config().gmail?.app_password;

const FALLBACK_TO = process.env.NOTIFY_TO || GMAIL_USER;

console.log("Gmail config check:", {
  hasUser: !!GMAIL_USER,
  hasPass: !!GMAIL_PASS,
  user: GMAIL_USER?.substring(0, 5) + "***"
});

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error("Gmail credentials missing! Set GMAIL_USER and GMAIL_APP_PASSWORD");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

exports.notifyOnNewCustomer = functions.firestore
  .document("customers/{customerId}")
  .onCreate(async (snap, context) => {
    const data = snap.data() || {};

    const name = data.name || "nicht angegeben";
    const email = data.email || "nicht angegeben";
    const phone = data.phone || "nicht angegeben";
    const unternehmen = data.unternehmen || "nicht angegeben";
    const projektArt = Array.isArray(data.projektArt) ? data.projektArt.join(", ") : (data.projektArt || "nicht angegeben");
    const budget = data.budget || "nicht angegeben";
    const timeline = data.timeline || "nicht angegeben";
    const nachricht = data.nachricht || "";
    const leadScore = data.leadScore != null ? data.leadScore : "n/a";

    const mailOptions = {
      from: `Spark&Scale Lead <${GMAIL_USER}>`,
      to: FALLBACK_TO,
      subject: `Neuer Lead: ${name}`,
      text: `
Neuer Lead eingegangen:\n\n
Name: ${name}
E-Mail: ${email}
Telefon: ${phone}
Unternehmen: ${unternehmen}
Projekt-Art: ${projektArt}
Budget: ${budget}
Timeline: ${timeline}
Lead-Score: ${leadScore}
Nachricht: ${nachricht}

Dokument-ID: ${context.params.customerId}
Erfasst: ${new Date().toLocaleString("de-DE")}
      `,
    };

    try {
      console.log("Versuche E-Mail zu senden an:", FALLBACK_TO);
      console.log("Mit Transporter-Config:", { user: GMAIL_USER?.substring(0, 5) + "***" });
      
      const result = await transporter.sendMail(mailOptions);
      console.log("✅ Lead-Mail erfolgreich gesendet:", result.messageId);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error("❌ Fehler beim E-Mail-Versand:", error.message);
      console.error("Error details:", error);
      return { success: false, error: error.message };
    }
  });