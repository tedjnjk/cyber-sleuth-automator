
import React, { useState, useRef, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Message, sendMessageToAI } from "@/services/ai-service";
import { ChatMessage } from "@/components/assistant/ChatMessage";
import { ChatSuggestions } from "@/components/assistant/ChatSuggestions";
import { AssistantGuide } from "@/components/assistant/AssistantGuide";
import { ApiKeySettings } from "@/components/assistant/ApiKeySettings";
import { supabase } from "@/integrations/supabase/client";

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI security assistant. How can I help you with your security testing and penetration tasks today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Use the provided API key
  const [apiKey, setApiKey] = useState("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");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load messages from Supabase
  useEffect(() => {
    const loadMessages = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session?.user) {
        const { data, error } = await supabase
          .from('ai_chat_messages')
          .select('*')
          .eq('user_id', session.session.user.id)
          .order('created_at', { ascending: true });
        
        if (!error && data && data.length > 0) {
          const loadedMessages = data.map(msg => ({
            id: msg.id,
            content: msg.content,
            role: msg.role as "user" | "assistant",
            timestamp: new Date(msg.created_at)
          }));
          
          setMessages(loadedMessages);
        }
      }
    };
    
    loadMessages();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Save to Supabase
      const { data: session } = await supabase.auth.getSession();
      if (session?.session?.user) {
        await supabase.from('ai_chat_messages').insert({
          user_id: session.session.user.id,
          role: userMessage.role,
          content: userMessage.content
        });
      }

      // Get the current conversation history
      const conversationHistory = [...messages, userMessage];

      // Send the message to the AI service
      const assistantMessage = await sendMessageToAI(
        conversationHistory,
        apiKey || undefined
      );
      
      // Save AI response to Supabase
      if (session?.session?.user) {
        await supabase.from('ai_chat_messages').insert({
          user_id: session.session.user.id,
          role: assistantMessage.role,
          content: assistantMessage.content
        });
      }
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI assistant.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const exportConversation = () => {
    const conversationText = messages
      .map((msg) => `${msg.role === 'user' ? 'You' : 'AI'}: ${msg.content}`)
      .join('\n\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-assistant-conversation-${new Date().toISOString().substring(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Security Assistant</h1>
            <p className="text-muted-foreground">Get help with security testing and vulnerability management</p>
          </div>
          
          <ApiKeySettings apiKey={apiKey} onApiKeyChange={setApiKey} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-16rem)]">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg flex items-center text-foreground">
                  <Bot className="mr-2 h-5 w-5 text-emerald-500" />
                  AI Security Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-[calc(100%-60px)]">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] flex-row">
                        <div className="flex-shrink-0 mt-1">
                          <Bot className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div className="mx-2 px-4 py-2 rounded-lg bg-card border border-border">
                          <div className="flex items-center space-x-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm">Thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t mt-auto">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-end gap-2"
                  >
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Ask about security testing, compliance, or vulnerabilities..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="pr-10"
                      />
                    </div>
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                  
                  {messages.length <= 2 && (
                    <ChatSuggestions onSelectSuggestion={(suggestion) => setInput(suggestion)} />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="hidden lg:block">
            <AssistantGuide onExportConversation={exportConversation} />
          </div>
        </div>
      </div>
    </DashboardPage>
  );
};

export default Assistant;
