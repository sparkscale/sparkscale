import { NextRequest, NextResponse } from 'next/server';
import { createCustomer } from '@/services/customerService';

export async function POST(request: NextRequest) {
  try {
    // Add timeout protection
    const payload = await Promise.race([
      request.json(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      )
    ]);
    
    const id = await Promise.race([
      createCustomer(payload as any),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database timeout')), 15000)
      )
    ]);
    
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Customer creation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create customer', details: errorMessage }, 
      { status: 500 }
    );
  }
}