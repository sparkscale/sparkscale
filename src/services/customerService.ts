// Simplified - No Firebase, No HubSpot, Just Email
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