import { NextRequest, NextResponse } from 'next/server';
import { createCustomer } from '@/services/customerService';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const id = await createCustomer(payload);
    
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Customer creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create customer' }, 
      { status: 500 }
    );
  }
}