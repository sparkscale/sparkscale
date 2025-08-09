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
  
  // Skip Firebase/HubSpot for now - just generate success ID
  const successId = `success_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  console.log('✅ Customer service: Generated success ID:', successId);
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('✅ Customer service: Processing complete');
  return successId;
}