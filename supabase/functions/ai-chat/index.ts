
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

interface Message {
  role: string;
  content: string;
}

interface RequestBody {
  messages: Message[];
  apiKey?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    // Parse the request body
    const requestBody = await req.json() as RequestBody;
    const { messages, apiKey } = requestBody;
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use the provided API key or fall back to environment variable
    const openaiApiKey = apiKey || Deno.env.get("OPENAI_API_KEY");
    
    if (!openaiApiKey) {
      console.error("No API key provided");
      return new Response(
        JSON.stringify({
          id: crypto.randomUUID(),
          role: "assistant",
          content: "I'm sorry, I need an API key to work properly. Please provide your OpenAI API key in the settings.",
          timestamp: new Date().toISOString(),
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Calling OpenAI API with messages:", JSON.stringify(messages.map(m => ({role: m.role, contentPreview: m.content.substring(0, 30)})), null, 2));

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", JSON.stringify(data));
      return new Response(
        JSON.stringify({
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Error from OpenAI: ${data.error?.message || "Unknown error"}. Please check your API key or try again later.`,
          timestamp: new Date().toISOString(),
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Response received from OpenAI");

    // Return the assistant's message
    return new Response(
      JSON.stringify({
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({
        id: crypto.randomUUID(),
        role: "assistant",
        content: "I'm sorry, I encountered an error processing your request. Please try again later.",
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
