
import { supabase } from "@/integrations/supabase/client";

export interface PhishingCampaign {
  id?: string;
  name: string;
  template_id: string;
  target_emails: string[];
  subject: string;
  content: string;
  sender_name: string;
  sender_email: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string; // Add user_id field to match Supabase table requirements
}

export interface PhishingResult {
  id?: string;
  campaign_id: string;
  email: string;
  opened: boolean;
  clicked: boolean;
  submitted_data: boolean;
  reported: boolean;
}

export const createPhishingCampaign = async (campaign: PhishingCampaign) => {
  // Get current user ID
  const { data: { user } } = await supabase.auth.getUser();
  
  // Create a new object with all campaign properties plus the user_id
  const campaignWithUserId = {
    ...campaign,
    user_id: user?.id // Add the user's ID from the auth context
  };

  // Insert the campaign with the user_id included
  const { data, error } = await supabase
    .from('phishing_campaigns')
    .insert(campaignWithUserId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getPhishingCampaigns = async () => {
  const { data, error } = await supabase
    .from('phishing_campaigns')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getPhishingCampaign = async (id: string) => {
  const { data, error } = await supabase
    .from('phishing_campaigns')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const getCampaignResults = async (campaignId: string) => {
  const { data, error } = await supabase
    .from('phishing_results')
    .select('*')
    .eq('campaign_id', campaignId);

  if (error) throw error;
  return data;
};

export const createInitialResults = async (campaignId: string, emails: string[]) => {
  const results = emails.map(email => ({
    campaign_id: campaignId,
    email,
    opened: false,
    clicked: false,
    submitted_data: false,
    reported: false
  }));

  const { data, error } = await supabase
    .from('phishing_results')
    .insert(results);

  if (error) throw error;
  return data;
};
