import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();
    
    // Use your existing email service (Firebase Functions or direct SMTP)
    // For now, just log to console in production
    console.log('Email Alert:', { to, subject, html });
    
    // TODO: Implement actual email sending
    // Could use Resend, SendGrid, or your Firebase Functions
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}