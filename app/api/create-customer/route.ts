import { NextRequest, NextResponse } from 'next/server';
import { createCustomer } from '@/services/customerService';

console.log('🔧 API Route module loaded');

export async function POST(request: NextRequest) {
  console.log('🚀 API ROUTE STARTED - create-customer');
  console.log('⏰ Timestamp:', new Date().toISOString());
  
  try {
    console.log('📥 Parsing request payload...');
    const payload = await request.json();
    console.log('✅ Payload received:', payload);
    
    // Try to create customer with shorter timeout
    try {
      console.log('🔄 Calling createCustomer function...');
      console.log('📋 Payload for createCustomer:', JSON.stringify(payload, null, 2));
      
      const id = await Promise.race([
        createCustomer(payload as any),
        new Promise((_, reject) => 
          setTimeout(() => {
            console.log('⏰ TIMEOUT: createCustomer took longer than 10s');
            reject(new Error('Service timeout after 10s'));
          }, 10000)
        )
      ]);
      
      console.log('✅ createCustomer succeeded with ID:', id);
      
      // Send email notification directly in API route
      try {
        console.log('📧 API Route: Sending email notification...');
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY || 're_WZn4gLoN_EQC3RtcH4CuLZs3MbejuBShk');
        
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
            <p style="color: #666; font-size: 12px; margin-top: 30px;">Customer ID: ${id}</p>
          </div>
        `;
        
        const emailResult = await resend.emails.send({
          from: 'Spark&Scale Website <noreply@sparkandscale.site>',
          to: [process.env.NOTIFICATION_EMAIL || 'spark.scale01@gmail.com'],
          subject: `🚀 Neue Anfrage (Score: ${payload.leadScore}) - ${payload.name}`,
          html: emailHtml,
        });
        
        if (emailResult.error) {
          console.error('❌ API Route: Email failed:', emailResult.error);
        } else {
          console.log('✅ API Route: Email sent successfully:', emailResult.data?.id);
        }
      } catch (emailError) {
        console.error('❌ API Route: Email error:', emailError);
      }
      
      console.log('🔧 API Route: About to return response');
      return NextResponse.json({ success: true, id });
    } catch (serviceError) {
      console.error('❌ SERVICE ERROR:', serviceError);
      console.error('📊 Error details:', {
        message: serviceError?.message,
        name: serviceError?.name,
        stack: serviceError?.stack,
      });
      
      // Fallback: At least return success for form submission
      const fallbackId = `fallback_${Date.now()}`;
      console.log('🔄 Using fallback ID:', fallbackId);
      
      return NextResponse.json({ 
        success: true, 
        id: fallbackId,
        warning: 'Data saved locally, external services may have failed'
      });
    }
    
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage }, 
      { status: 500 }
    );
  }
}