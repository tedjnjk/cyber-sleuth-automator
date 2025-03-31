
import { supabase } from "@/integrations/supabase/client";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const sendMessageToAI = async (
  messages: Message[],
  apiKey?: string
): Promise<Message> => {
  try {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    // Format messages for the API
    const formattedMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    console.log("Sending message to AI assistant...");

    // Call the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke("ai-chat", {
      body: { 
        messages: formattedMessages,
        apiKey: apiKey
      },
    });

    if (error) {
      console.error("Error calling AI service:", error);
      throw new Error(error.message || "Failed to get a response");
    }

    // Convert timestamp string to Date object
    if (data.timestamp && typeof data.timestamp === 'string') {
      data.timestamp = new Date(data.timestamp);
    } else {
      data.timestamp = new Date();
    }

    return data as Message;
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    
    // Return a fallback message in case of error
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "I'm sorry, I encountered an error processing your request. Please check your API key or try again later.",
      timestamp: new Date(),
    };
  }
};
