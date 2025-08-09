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
  const docRef = await addDoc(collection(db, "customers"), {
    ...payload,
    createdAt: serverTimestamp(),
    source: "website",
  });

  // HubSpot CRM sync
  try {
    const [firstname, ...lastnameParts] = payload.name.split(' ');
    await hubspot.createContact({
      email: payload.email,
      firstname: firstname || '',
      lastname: lastnameParts.join(' ') || '',
      phone: payload.phone,
      company: payload.unternehmen,
      project_type: payload.projektArt.join(', '),
      budget_range: payload.budget,
      timeline: payload.timeline,
    });
  } catch (error) {
    console.error('HubSpot sync failed:', error);
  }

  return docRef.id;
}