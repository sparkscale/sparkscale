import { NextRequest, NextResponse } from 'next/server';

console.log('🔧 API Route module loaded');

export async function POST(request: NextRequest) {
  console.log('🚀 API ROUTE STARTED - create-customer');
  console.log('⏰ Timestamp:', new Date().toISOString());
  
  try {
    console.log('📥 Parsing request payload...');
    const payload = await request.json();
    console.log('✅ Payload received:', payload);
    
    // Send email notification FIRST
    console.log('📧 API Route: About to send email notification...');
    console.log('📧 API Route: RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('📧 API Route: NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL);
    
    try {
      console.log('📧 API Route: Importing Resend...');
      const { Resend } = await import('resend');
      console.log('📧 API Route: Resend imported successfully');
      
      // Hardcoded for testing - Environment Variables haben Probleme
      const apiKey = 're_WZn4gLoN_EQC3RtcH4CuLZs3MbejuBShk';
      const emailTo = 'spark.scale01@gmail.com';
      console.log('📧 API Route: Using hardcoded API key for testing');
      
      const resend = new Resend(apiKey);
      console.log('📧 API Route: Resend instance created');
      
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f4c430;">🚀 Neue Kontaktanfrage - Spark&Scale</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">📊 Lead Score: ${payload.leadScore}/100</h3>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Projekt:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.projektArt?.join(', ')}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.budget}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.timeline}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${payload.nachricht || 'Keine Nachricht'}</td></tr>
          </table>
        </div>
      `;
      
      console.log('📧 API Route: About to send email...');
      const emailResult = await resend.emails.send({
        from: 'Spark&Scale Website <noreply@sparkandscale.site>',
        to: [emailTo],
        subject: `🚀 Neue Anfrage (Score: ${payload.leadScore}) - ${payload.name}`,
        html: emailHtml,
      });
      
      console.log('📧 API Route: Email send completed');
      console.log('📧 API Route: Email result:', emailResult);
      
      if (emailResult.error) {
        console.error('❌ API Route: Email failed:', emailResult.error);
      } else {
        console.log('✅ API Route: Email sent successfully:', emailResult.data?.id);
      }
    } catch (emailError) {
      console.error('❌ API Route: Email error:', emailError);
    }

    // Generate simple success ID
    const successId = `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('✅ Generated success ID:', successId);
    
    console.log('🔧 API Route: About to return response');
    return NextResponse.json({ success: true, id: successId });
    
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage }, 
      { status: 500 }
    );
  }
}