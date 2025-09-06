import React from "react";
import { type MessageType } from "../types";

interface MessageProps {
  msg: MessageType;
  formatTime: (date: Date) => string;
}

const Message: React.FC<MessageProps> = ({ msg, formatTime }) => {
  return (
    <div
      className={`flex ${
        msg.sender === "user" ? "justify-end" : "justify-start"
      } animate-fade-in`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg backdrop-blur-sm ${
          msg.sender === "user"
            ? "bg-blue-500/90 text-white rounded-br-md"
            : "bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white rounded-bl-md border border-gray-200/50 dark:border-gray-600/50"
        }`}
      >
        <p className="text-sm">{msg.text}</p>
        <p
          className={`text-xs mt-1 ${
            msg.sender === "user"
              ? "text-blue-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {formatTime(msg.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default Message;
