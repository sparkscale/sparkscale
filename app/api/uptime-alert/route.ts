import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const alertData = await request.json();
    
    // Send email alert
    const emailData = {
      to: 'spark.scale01@gmail.com',
      subject: `🚨 Website Down Alert - ${alertData.url}`,
      html: `
        <h2>Website Downtime Alert</h2>
        <p><strong>URL:</strong> ${alertData.url}</p>
        <p><strong>Status:</strong> ${alertData.status}</p>
        <p><strong>Time:</strong> ${alertData.timestamp}</p>
        <p><strong>Response Time:</strong> ${alertData.responseTime}ms</p>
        ${alertData.statusCode ? `<p><strong>Status Code:</strong> ${alertData.statusCode}</p>` : ''}
        ${alertData.error ? `<p><strong>Error:</strong> ${alertData.error}</p>` : ''}
        
        <p>Please check the website immediately.</p>
      `,
    };

    // Send via your email service (using existing Firebase function or direct SMTP)
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Uptime alert error:', error);
    return NextResponse.json({ error: 'Failed to process alert' }, { status: 500 });
  }
}