import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { hubspot } from '@/lib/hubspot';

export interface CustomerPayload {
  projektArt: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
  unternehmen?: string;
  nachricht?: string;
  leadScore: number;
}

export async function createCustomer(payload: CustomerPayload) {
  console.log('✅ Customer service: Processing payload');
  console.log('📋 Payload data:', JSON.stringify(payload, null, 2));
  
  // Generate success ID
  const successId = `success_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  console.log('✅ Customer service: Generated success ID:', successId);
  
  // Send email notification
  try {
    console.log('📧 Customer service: Sending email notification...');
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkandscale.site';
    const emailResponse = await fetch(`${baseUrl}/api/send-notification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        customerId: successId,
      }),
    });
    
    if (emailResponse.ok) {
      console.log('✅ Customer service: Email notification sent');
    } else {
      console.error('❌ Customer service: Email notification failed');
    }
  } catch (emailError) {
    console.error('❌ Customer service: Email error:', emailError);
    // Continue without email - don't fail the whole process
  }
  
  console.log('✅ Customer service: Processing complete');
  return successId;
}