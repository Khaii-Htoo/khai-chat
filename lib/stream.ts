import { StreamChat } from "stream-chat";

const streamApiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

if (!streamApiKey) {
  throw new Error("Need to set NEXT_PUBLIC_STREAM_API_KEY");
}

export const streamClient = StreamChat.getInstance(streamApiKey);
