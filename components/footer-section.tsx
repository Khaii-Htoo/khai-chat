import { MessageCircle } from "lucide-react";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transform rotate-12 transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600">
              <MessageCircle className="w-6 h-6 text-white transform -rotate-12" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatFlow
            </span>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 ChatFlow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
