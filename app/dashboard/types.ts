// types.ts
export interface MessageType {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
  avatar?: string;
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  avatar: string;
  online?: boolean;
  unread?: number;
  timestamp: string;
}
