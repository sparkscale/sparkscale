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
  let docId = null;
  
  // Try Firebase first
  try {
    console.log('Attempting Firebase save...');
    console.log('Firebase config check:', {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      hasApiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      hasAuthDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    });
    
    const docRef = await addDoc(collection(db, "customers"), {
      ...payload,
      createdAt: serverTimestamp(),
      source: "website",
    });
    docId = docRef.id;
    console.log('Firebase save successful:', docId);
  } catch (firebaseError) {
    console.error('Firebase save failed - DETAILED ERROR:', {
      message: firebaseError.message,
      code: firebaseError.code,
      name: firebaseError.name,
      stack: firebaseError.stack,
    });
    // Continue without Firebase
    docId = `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Skip HubSpot sync temporarily to test Firebase
  console.log('Skipping HubSpot sync for testing...');

  return docId;
}