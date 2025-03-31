
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get request data
    const { messages, apiKey } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { 
          status: 400, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    // Check for API key
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key is required" }),
        { 
          status: 400, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    // Format messages for OpenAI API
    const formattedMessages = messages.map((msg: Message) => ({
      role: msg.role,
      content: msg.content
    }));

    // Add system message to better define assistant behavior
    formattedMessages.unshift({
      role: "system",
      content: "You are an AI security assistant specializing in cybersecurity, penetration testing, and ethical hacking. You have expertise in vulnerability assessment, threat modeling, and security best practices. Provide clear, accurate advice on security-related topics. When discussing potentially harmful techniques, always emphasize ethical use for defensive purposes only. Keep responses concise and focused on the security aspects of questions."
    });

    // Make request to OpenAI API
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    // Handle OpenAI API response
    if (!openAIResponse.ok) {
      const error = await openAIResponse.json();
      console.error("OpenAI API error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to get response from OpenAI" }),
        { 
          status: 500, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    const data = await openAIResponse.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return new Response(
        JSON.stringify({ error: "Invalid response from OpenAI" }),
        { 
          status: 500, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    // Format the response
    const assistantMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: data.choices[0].message.content,
      timestamp: new Date()
    };

    return new Response(
      JSON.stringify(assistantMessage),
      { 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
  }
});
