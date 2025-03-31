
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { Message } from "@/services/ai-service";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
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
  );
};
