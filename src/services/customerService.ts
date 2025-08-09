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
    const docRef = await addDoc(collection(db, "customers"), {
      ...payload,
      createdAt: serverTimestamp(),
      source: "website",
    });
    docId = docRef.id;
    console.log('Firebase save successful:', docId);
  } catch (firebaseError) {
    console.error('Firebase save failed:', firebaseError);
    // Continue without Firebase
    docId = `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Skip HubSpot sync temporarily to test Firebase
  console.log('Skipping HubSpot sync for testing...');

  return docId;
}