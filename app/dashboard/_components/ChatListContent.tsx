"use client";
import { useUser } from "@clerk/nextjs";
import { ChannelFilters, ChannelSort } from "stream-chat";
import { ChannelList } from "stream-chat-react";

export const ChatListContent = () => {
  const { user } = useUser();

  const filters: ChannelFilters = {
    members: { $in: [String(user!.id)] },
    type: { $in: ["messaging", "team"] },
  };

  const options = { presence: true, state: true };
  const sort: ChannelSort = {
    last_message_at: -1,
  };

  return (
    <div className="p-3">
      <ChannelList filters={filters} options={options} sort={sort} />
    </div>
  );
};
