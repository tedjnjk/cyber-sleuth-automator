
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

interface MLRequest {
  endpoint: string;
  data: Record<string, any>;
  modelType?: string;
}

serve(async (req) => {
  try {
    const requestData = await req.json() as MLRequest;
    
    if (!requestData.endpoint || !requestData.data) {
      return new Response(
        JSON.stringify({ error: "Invalid request format. Endpoint and data are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get configuration from environment variables
    const ML_SERVICE_URL = Deno.env.get("ML_SERVICE_URL");
    const ML_API_KEY = Deno.env.get("ML_API_KEY");
    
    if (!ML_SERVICE_URL) {
      return new Response(
        JSON.stringify({ error: "ML service URL not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Construct the full URL to the Python ML service
    const url = `${ML_SERVICE_URL}${requestData.endpoint}`;
    
    // Forward the request to the Python ML service
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ML_API_KEY ? `Bearer ${ML_API_KEY}` : "",
      },
      body: JSON.stringify({
        ...requestData.data,
        modelType: requestData.modelType,
      }),
    });

    const responseData = await response.json();

    // Return the ML service response
    return new Response(
      JSON.stringify(responseData),
      { 
        status: response.status, 
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing ML request:", error);
    
    return new Response(
      JSON.stringify({ error: "Failed to process machine learning request" }),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});
