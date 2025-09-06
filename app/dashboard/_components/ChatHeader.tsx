import React from "react";
import { Phone, Video, MoreVertical } from "lucide-react";
import Avatar from "./Avatar";
import { Chat } from "../types";

interface ChatHeaderProps {
  selectedChat: Chat;
  onSidebarOpen: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  selectedChat,
  onSidebarOpen,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between shadow-sm flex-shrink-0">
      <div className="flex items-center">
        <button
          onClick={onSidebarOpen}
          className="lg:hidden mr-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <Avatar avatar={selectedChat.avatar} online={true} />
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-white">
            {selectedChat.name}
          </h2>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <Video className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
