
import React, { useState, useRef, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, Send, ChevronRight, Info, AlertCircle, User, Loader2, Download, Cog } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Message, sendMessageToAI } from "@/services/ai-service";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

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
  const [apiKey, setApiKey] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      // Get the current conversation history
      const conversationHistory = [...messages, userMessage];

      // Send the message to the AI service
      const assistantMessage = await sendMessageToAI(
        conversationHistory,
        apiKey || undefined
      );
      
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

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderSuggestions = () => {
    const suggestions = [
      "How do I run an automated security scan?",
      "What is SQL injection and how do I test for it?",
      "Help me understand GDPR compliance requirements",
      "How do I create a phishing simulation?"
    ];

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs text-left justify-start h-auto py-1.5 px-3"
            onClick={() => {
              setInput(suggestion);
            }}
          >
            <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate">{suggestion}</span>
          </Button>
        ))}
      </div>
    );
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
            <h1 className="text-2xl font-bold">AI Security Assistant</h1>
            <p className="text-muted-foreground">Get help with security testing and vulnerability management</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Cog className="h-4 w-4 mr-2" />
                API Settings
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>AI Assistant Settings</DialogTitle>
                <DialogDescription>
                  Enter your OpenAI API key to enable the AI assistant.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">OpenAI API Key</Label>
                  <Input
                    id="apiKey" 
                    
                    value={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}
                    onChange={(e) => setApiKey(e.target.value)}
                    type="password"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your API key is stored locally and never sent to our servers.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-16rem)]">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-emerald-500" />
                  AI Security Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-[calc(100%-60px)]">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "assistant" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`flex max-w-[80%] ${
                          message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {message.role === "assistant" ? (
                            <Avatar className="h-8 w-8 bg-emerald-500 text-black">
                              <AvatarFallback>
                                <Bot className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                          ) : (
                            <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                              <AvatarFallback>
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                        <div
                          className={`mx-2 px-4 py-2 rounded-lg ${
                            message.role === "assistant"
                              ? "bg-card border border-border"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                          <div
                            className={`text-xs mt-1 text-right ${
                              message.role === "assistant"
                                ? "text-muted-foreground"
                                : "text-primary-foreground/70"
                            }`}
                          >
                            {formatTimestamp(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] flex-row">
                        <div className="flex-shrink-0 mt-1">
                          <Avatar className="h-8 w-8 bg-emerald-500 text-black">
                            <AvatarFallback>
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
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
                  
                  {messages.length <= 2 && renderSuggestions()}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="hidden lg:block">
            <Card className="h-[calc(100vh-16rem)]">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  Assistant Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 overflow-y-auto space-y-4 text-sm">
                <div>
                  <h3 className="font-medium mb-2">What can the assistant help with?</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Setting up security scans</li>
                    <li>Interpreting vulnerability reports</li>
                    <li>Guiding through penetration testing</li>
                    <li>Explaining security concepts</li>
                    <li>Recommending security practices</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Example Commands</h3>
                  <div className="space-y-2">
                    <div className="p-2 bg-muted rounded-md">
                      "Help me set up a scan for SQL injection vulnerabilities"
                    </div>
                    <div className="p-2 bg-muted rounded-md">
                      "What are best practices for API security testing?"
                    </div>
                    <div className="p-2 bg-muted rounded-md">
                      "Explain CSRF attacks and how to test for them"
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Tips</h3>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-amber-500" />
                    <p>Be specific about what type of security testing you need help with.</p>
                  </div>
                </div>
                
                <div className="pt-2 mt-auto">
                  <Button variant="outline" className="w-full" size="sm" onClick={exportConversation}>
                    <Download className="mr-2 h-4 w-4" />
                    Export Conversation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardPage>
  );
};

export default Assistant;
