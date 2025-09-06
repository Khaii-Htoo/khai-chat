import { MessageCircle } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center transform rotate-12 transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600">
        <MessageCircle className="w-6 h-6 text-white transform -rotate-12" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        ChatFlow
      </span>
    </div>
  );
}
