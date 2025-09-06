import React from "react";

const EmptyChat: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background for empty state */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-3xl">💬</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Welcome to Chat
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Select a conversation to start messaging
        </p>
      </div>
    </div>
  );
};

export default EmptyChat;
