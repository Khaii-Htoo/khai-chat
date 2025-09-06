"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { ChannelFilters, ChannelSort } from "stream-chat";
import { ChannelList } from "stream-chat-react";

const ChatList = () => {
  const { user, isLoaded } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isLoaded || !user) {
    return <div>Loading...</div>;
  }

  const filters: ChannelFilters = {
    members: { $in: [String(user.id)] },
    type: { $in: ["messaging", "team"] },
  };

  const options = { presence: true, state: true };
  const sort: ChannelSort = {
    last_message_at: -1,
  };

  return (
    <div className="p-3">
      <div suppressHydrationWarning>Logged in as: {user.id}</div>

      <ChannelList filters={filters} options={options} sort={sort} />
    </div>
  );
};

export default ChatList;
