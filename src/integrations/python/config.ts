
/**
 * Python Machine Learning Integration Configuration
 * 
 * This module facilitates integration with Python-based ML services
 * by providing configuration and helper functions.
 */

import { supabase } from "@/integrations/supabase/client";

export interface PythonMLRequest {
  endpoint: string;
  data: Record<string, any>;
  modelType?: "classification" | "regression" | "clustering" | "nlp";
}

export interface PythonMLResponse {
  success: boolean;
  result?: any;
  error?: string;
}

/**
 * Sends a request to a Python ML service via Supabase Edge Function
 */
export const callPythonML = async (
  request: PythonMLRequest
): Promise<PythonMLResponse> => {
  try {
    const { data, error } = await supabase.functions.invoke("python-ml-proxy", {
      body: request,
    });

    if (error) {
      console.error("Error calling Python ML service:", error);
      return { 
        success: false, 
        error: error.message || "Failed to process machine learning request" 
      };
    }

    return { 
      success: true, 
      result: data 
    };
  } catch (error) {
    console.error("Error in Python ML request:", error);
    return { 
      success: false, 
      error: "An unexpected error occurred while processing the ML request" 
    };
  }
};

/**
 * Configuration for different ML model endpoints
 */
export const ML_ENDPOINTS = {
  VULNERABILITY_PREDICTION: "/api/vulnerability/predict",
  ATTACK_PATH_SIMULATION: "/api/attack/simulate",
  THREAT_CLASSIFICATION: "/api/threat/classify",
  PHISHING_DETECTION: "/api/phishing/detect",
  ANOMALY_DETECTION: "/api/anomaly/detect",
};
