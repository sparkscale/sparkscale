import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('📧 Email API: Starting notification send');
  
  try {
    const payload = await request.json();
    console.log('📋 Email API: Payload received:', payload);

    // Email Template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f4c430;">🚀 Neue Kontaktanfrage - Spark&Scale</h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📊 Lead Score: ${payload.leadScore}/100</h3>
          <p style="color: ${payload.leadScore >= 70 ? '#28a745' : payload.leadScore >= 40 ? '#ffc107' : '#dc3545'}; font-weight: bold;">
            ${payload.leadScore >= 70 ? '🔥 HIGH PRIORITY LEAD' : payload.leadScore >= 40 ? '⚡ MEDIUM PRIORITY' : '📝 LOW PRIORITY'}
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${payload.email}">${payload.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.phone || 'Nicht angegeben'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Unternehmen:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.unternehmen || 'Nicht angegeben'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Projekt:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.projektArt?.join(', ') || 'Nicht angegeben'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.budget}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.timeline}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.nachricht || 'Keine Nachricht'}</td>
          </tr>
        </table>

        <div style="background: #f4c430; color: #333; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0;">⚡ Nächste Schritte:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Antwort innerhalb 2 Stunden für High Priority Leads</li>
            <li>Kostenlose Analyse anbieten</li>
            <li>Termin für Beratungsgespräch vorschlagen</li>
          </ul>
        </div>

        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          📅 Eingegangen: ${new Date().toLocaleString('de-DE')}<br>
          🌐 Website: sparkandscale.site<br>
          📊 Customer ID: ${payload.customerId}
        </p>
      </div>
    `;

    // Send Email
    const { data, error } = await resend.emails.send({
      from: 'Spark&Scale Website <noreply@sparkandscale.site>',
      to: [process.env.NOTIFICATION_EMAIL || 'spark.scale01@gmail.com'],
      subject: `🚀 Neue Anfrage (Score: ${payload.leadScore}) - ${payload.name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('📧 Email API: Send failed:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('✅ Email API: Email sent successfully:', data);
    return NextResponse.json({ success: true, emailId: data?.id });

  } catch (error) {
    console.error('❌ Email API: Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}