
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ChatSuggestionsProps {
  onSelectSuggestion: (suggestion: string) => void;
}

export const ChatSuggestions = ({ onSelectSuggestion }: ChatSuggestionsProps) => {
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
          onClick={() => onSelectSuggestion(suggestion)}
        >
          <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
          <span className="truncate">{suggestion}</span>
        </Button>
      ))}
    </div>
  );
};
