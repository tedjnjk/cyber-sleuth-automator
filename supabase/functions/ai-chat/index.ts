
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

interface Message {
  role: string;
  content: string;
}

interface RequestBody {
  messages: Message[];
  apiKey?: string;
}

serve(async (req) => {
  try {
    const { messages, apiKey } = await req.json() as RequestBody;
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Use the provided API key or fall back to environment variable
    const openaiApiKey = apiKey || Deno.env.get("OPENAI_API_KEY");
    
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: "No API key provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", data);
      throw new Error(data.error?.message || "Failed to get a response from OpenAI");
    }

    // Return the assistant's message
    return new Response(
      JSON.stringify({
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" }
      }
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
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});
