import { NextRequest, NextResponse } from 'next/server';

console.log('🔧 Enterprise API Route module loaded');

export async function POST(request: NextRequest) {
  console.log('🚀 Enterprise API ROUTE STARTED');
  console.log('⏰ Timestamp:', new Date().toISOString());

  try {
    console.log('📥 Parsing request payload...');
    const payload = await request.json();
    console.log('✅ Payload received:', payload);

    // Send email notification FIRST
    console.log('📧 API Route: About to send email notification...');
    console.log('📧 API Route: Using hardcoded API key (same as contact form)');

    try {
      console.log('📧 API Route: Importing Resend...');
      const { Resend } = await import('resend');
      console.log('📧 API Route: Resend imported successfully');

      // Hardcoded for testing - Same as create-customer route
      const apiKey = 're_WZn4gLoN_EQC3RtcH4CuLZs3MbejuBShk';
      const emailTo = 'spark.scale01@gmail.com';
      console.log('📧 API Route: Using hardcoded API key for testing');

      const resend = new Resend(apiKey);
      console.log('📧 API Route: Resend instance created');

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f4c430;">🏢 Enterprise Anfrage - Spark&Scale</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Unternehmensdaten</h3>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Unternehmen:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.unternehmen}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Ansprechpartner:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.ansprechpartner}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Position:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.position || 'Nicht angegeben'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.telefon || 'Nicht angegeben'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.nachricht || 'Keine Nachricht'}</td></tr>
          </table>
        </div>
      `;

      console.log('📧 API Route: About to send email...');
      const emailResult = await resend.emails.send({
        from: 'Spark&Scale Enterprise <noreply@sparkandscale.site>',
        to: [emailTo],
        subject: `🏢 Enterprise Anfrage - ${payload.unternehmen}`,
        html: emailHtml,
      });

      console.log('📧 API Route: Email send completed');
      console.log('📧 API Route: Email result:', emailResult);

      if (emailResult.error) {
        console.error('❌ API Route: Email failed:', emailResult.error);
      } else {
        console.log(
          '✅ API Route: Email sent successfully:',
          emailResult.data?.id
        );
      }
    } catch (emailError) {
      console.error('❌ API Route: Email error:', emailError);
    }

    // Generate simple success ID
    const successId = `enterprise_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('✅ Generated success ID:', successId);

    console.log('🔧 API Route: About to return response');
    return NextResponse.json({
      success: true,
      id: successId,
      emailSent: true,
      message: 'Enterprise-Anfrage erfolgreich übermittelt',
    });
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage },
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
