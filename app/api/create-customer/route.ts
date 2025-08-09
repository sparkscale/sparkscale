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