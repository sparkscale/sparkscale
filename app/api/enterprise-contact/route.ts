import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');

    const body = await request.json();
    console.log('Request body:', body);

    const {
      unternehmen,
      ansprechpartner,
      position,
      email,
      telefon,
      nachricht,
    } = body;

    // Validation
    if (!unternehmen || !ansprechpartner || !email || !telefon) {
      return NextResponse.json(
        { error: 'Pflichtfelder fehlen' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Log the data
    console.log('Enterprise form submission:', {
      unternehmen,
      ansprechpartner,
      position,
      email,
      telefon,
      nachricht,
    });

    // Send email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const emailData = await resend.emails.send({
          from: 'Enterprise Kontakt <noreply@sparkscale.de>',
          to: ['spark.scale01@gmail.com'],
          subject: `🏢 Enterprise Anfrage von ${unternehmen}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
              <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #a29a88;">
                  <h1 style="color: #1f2937; margin: 0; font-size: 24px; font-weight: bold;">
                    🏢 Enterprise Strategiegespräch Anfrage
                  </h1>
                  <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 14px;">
                    Neue Anfrage über die Enterprise-Kontakt-Seite
                  </p>
                </div>

                <!-- Unternehmensdaten -->
                <div style="margin-bottom: 25px;">
                  <h2 style="color: #a29a88; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                    📊 Unternehmensdaten
                  </h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">Unternehmen:</td>
                      <td style="padding: 8px 0; color: #1f2937;">${unternehmen}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">Ansprechpartner:</td>
                      <td style="padding: 8px 0; color: #1f2937;">${ansprechpartner}</td>
                    </tr>
                    ${
                      position
                        ? `
                    <tr>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">Position:</td>
                      <td style="padding: 8px 0; color: #1f2937;">${position}</td>
                    </tr>
                    `
                        : ''
                    }
                  </table>
                </div>

                <!-- Kontaktdaten -->
                <div style="margin-bottom: 25px;">
                  <h2 style="color: #a29a88; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                    📞 Kontaktdaten
                  </h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">E-Mail:</td>
                      <td style="padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #a29a88; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">Telefon:</td>
                      <td style="padding: 8px 0;">
                        <a href="tel:${telefon}" style="color: #a29a88; text-decoration: none;">${telefon}</a>
                      </td>
                    </tr>
                  </table>
                </div>

                ${
                  nachricht
                    ? `
                <!-- Projektbeschreibung -->
                <div style="margin-bottom: 25px;">
                  <h2 style="color: #a29a88; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                    💼 Projektbeschreibung
                  </h2>
                  <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #a29a88;">
                    <p style="margin: 0; color: #1f2937; line-height: 1.6;">${nachricht.replace(/\n/g, '<br>')}</p>
                  </div>
                </div>
                `
                    : ''
                }

                <!-- Call to Action -->
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px;">
                    ⏰ Empfohlene Reaktionszeit: Innerhalb von 24 Stunden
                  </p>
                  <a href="mailto:${email}" 
                     style="display: inline-block; background-color: #a29a88; color: white; padding: 12px 24px; 
                            text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                    Direkt antworten
                  </a>
                </div>

                <!-- Footer -->
                <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    Diese E-Mail wurde automatisch über die Enterprise-Kontakt-Seite von sparkscale.de generiert.
                  </p>
                </div>

              </div>
            </div>
          `,
        });

        console.log('Email sent successfully:', emailData.data?.id);

        return NextResponse.json({
          success: true,
          message: 'Enterprise-Anfrage erfolgreich gesendet',
          emailId: emailData.data?.id,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);

        // Still return success but log email failure
        return NextResponse.json({
          success: true,
          message:
            'Enterprise-Anfrage erfolgreich übermittelt (E-Mail-Versand fehlgeschlagen)',
          emailError:
            emailError instanceof Error
              ? emailError.message
              : 'Unknown email error',
        });
      }
    } else {
      console.log('RESEND_API_KEY not configured, skipping email');

      return NextResponse.json({
        success: true,
        message:
          'Enterprise-Anfrage erfolgreich übermittelt (E-Mail-Service nicht konfiguriert)',
      });
    }
  } catch (error) {
    console.error('Enterprise contact form error:', error);

    return NextResponse.json(
      {
        error: 'Fehler beim Verarbeiten der Anfrage',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Add GET method for testing
export async function GET() {
  return NextResponse.json({
    message: 'Enterprise Contact API is working',
    timestamp: new Date().toISOString(),
  });
}
