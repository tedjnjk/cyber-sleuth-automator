
import { supabase } from "@/integrations/supabase/client";

export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

export async function sendMessageToAI(
  messages: Message[],
  apiKey?: string
): Promise<Message> {
  try {
    // Format messages for OpenAI API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // If we have a Supabase connection, use the edge function
    const { data, error } = await supabase.functions.invoke('ai-chat', {
      body: {
        messages: formattedMessages,
        apiKey: apiKey // Pass the API key if provided directly
      }
    });

    if (error) throw new Error(error.message);

    return {
      id: Date.now().toString(),
      content: data.response || "I'm sorry, I couldn't generate a response.",
      role: "assistant",
      timestamp: new Date()
    };
  } catch (error) {
    console.error("Error in AI service:", error);
    
    // Fallback for demo or when API is unavailable
    return {
      id: Date.now().toString(),
      content: "I'm sorry, there was an error connecting to the AI service. Please check your API key and network connection.",
      role: "assistant",
      timestamp: new Date()
    };
  }
}
