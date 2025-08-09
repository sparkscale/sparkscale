interface HubSpotContact {
  email: string;
  firstname: string;
  lastname: string;
  phone?: string;
  company?: string;
  website?: string;
  project_type?: string;
  budget_range?: string;
  timeline?: string;
  lead_score?: number;
}

interface HubSpotDeal {
  dealname: string;
  amount: string;
  dealstage: string;
  pipeline: string;
}

class HubSpotAPI {
  private apiKey: string;
  private baseUrl = 'https://api.hubapi.eu';

  constructor() {
    this.apiKey = process.env.HUBSPOT_API_KEY || '';
  }

  async createContact(data: HubSpotContact) {
    const leadScore = this.calculateLeadScore(data);
    
    const properties = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      company: data.company,
      website: data.website,
      project_type: data.project_type,
      budget_range: data.budget_range,
      timeline: data.timeline,
      lead_score: leadScore.toString(),
      lifecyclestage: this.getLifecycleStage(leadScore),
    };

    const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.statusText}`);
    }

    const contact = await response.json();
    
    // Create deal if high-value lead
    if (leadScore >= 70) {
      await this.createDeal(contact.id, data);
    }

    return contact;
  }

  async createDeal(contactId: string, data: HubSpotContact) {
    const dealValue = this.estimateDealValue(data.budget_range);
    
    const properties = {
      dealname: `${data.firstname} ${data.lastname} - ${data.project_type}`,
      amount: dealValue,
      dealstage: 'appointmentscheduled',
      pipeline: 'default',
      hubspot_owner_id: process.env.HUBSPOT_OWNER_ID,
    };

    const response = await fetch(`${this.baseUrl}/crm/v3/objects/deals`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    });

    const deal = await response.json();

    // Associate deal with contact
    await this.associateContactDeal(contactId, deal.id);

    return deal;
  }

  private async associateContactDeal(contactId: string, dealId: string) {
    await fetch(`${this.baseUrl}/crm/v3/objects/contacts/${contactId}/associations/deals/${dealId}/3`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      },
    });
  }

  private calculateLeadScore(data: HubSpotContact): number {
    let score = 0;

    // Budget scoring (40 points max)
    if (data.budget_range === '9500+') score += 40;
    else if (data.budget_range === '5500') score += 30;
    else if (data.budget_range === '2500') score += 20;

    // Timeline scoring (20 points max)
    if (data.timeline === 'Sofort') score += 20;
    else if (data.timeline === '1 Monat') score += 15;
    else if (data.timeline === '3+ Monate') score += 10;

    // Project type scoring (20 points max)
    if (data.project_type === 'Performance') score += 20;
    else if (data.project_type === 'SEO') score += 18;
    else if (data.project_type === 'Website') score += 15;
    else if (data.project_type === 'Local SEO') score += 12;

    // Company/Website scoring (20 points max)
    if (data.company) score += 10;
    if (data.website) score += 10;

    return Math.min(score, 100);
  }

  private getLifecycleStage(score: number): string {
    if (score >= 80) return 'marketingqualifiedlead';
    if (score >= 60) return 'lead';
    return 'subscriber';
  }

  private estimateDealValue(budget: string | undefined): string {
    switch (budget) {
      case '9500+': return '12000';
      case '5500': return '7500';
      case '2500': return '3500';
      default: return '2500';
    }
  }
}

export const hubspot = new HubSpotAPI();