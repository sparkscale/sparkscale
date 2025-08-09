import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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
  return docRef.id;
}