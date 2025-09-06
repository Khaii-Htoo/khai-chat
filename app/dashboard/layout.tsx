"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Send, Phone, Video, MoreVertical, Search, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import UserSyncWrapper from "@/components/user-sync-wrapper";
import { Chat, MessageType } from "./types";
import dynamic from "next/dynamic";
import ChatHeader from "./_components/ChatHeader";
import MessageInput from "./_components/MessageInput";
import Message from "./_components/Message";
import EmptyChat from "./_components/EmptyChat";
import SidebarHeader from "./_components/sidebar-header";
const ChatList = dynamic(() => import("./_components/ChatList"), {
  ssr: false,
});
const page = ({ children }: { children: ReactNode }) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chats: Chat[] = [
    {
      id: "1",
      name: "Jay Rathod",
      lastMessage: "Hi there!",
      avatar: "👨‍💻",
      online: true,
      unread: 0,
      timestamp: "9:58 PM",
    },
    {
      id: "2",
      name: "Sonny Sangha",
      lastMessage: "Hi there!",
      avatar: "👨‍🎨",
      online: true,
      unread: 3,
      timestamp: "Yesterday",
    },
    {
      id: "3",
      name: "AVENGERS",
      lastMessage: "This is cool!",
      avatar: "🦸‍♂️",
      online: false,
      unread: 5,
      timestamp: "2 days ago",
    },
  ];

  const sampleMessages: MessageType[] = [
    {
      id: "1",
      text: "Hi there!",
      sender: "other",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Hey! How are you doing?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "I'm doing great! Working on some exciting projects. What about you?",
      sender: "other",
      timestamp: new Date(),
    },
  ];

  useEffect(() => {
    if (chats.length > 0 && !selectedChat) {
      setSelectedChat(chats[0]);
      setMessages(sampleMessages);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    setMessages(sampleMessages);
    setSidebarOpen(false);
  };

  return (
    <UserSyncWrapper>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative z-30 w-80 min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out flex flex-col`}
        >
          {/* Sidebar Header */}
          <SidebarHeader />

          {/* Search Bar */}
          <div className="p-4 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          <ChatList />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {children}
          {/* {selectedChat ? (
            <>
              <ChatHeader
                selectedChat={selectedChat}
                onSidebarOpen={() => setSidebarOpen(true)}
              />

              <div className="flex-1 overflow-y-auto p-4 space-y-4 relative bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-float-slow"></div>
                  <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-xl animate-float-delayed"></div>
                  <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-xl animate-float"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-xl animate-float-slow"></div>
                </div>

                <div className="relative z-10">
                  {messages.map((msg) => (
                    <Message key={msg.id} msg={msg} formatTime={formatTime} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <MessageInput
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            </>
          ) : (
            <EmptyChat />
          )} */}
        </div>
      </div>
    </UserSyncWrapper>
  );
};

export default page;
