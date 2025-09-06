import { StreamChat } from "stream-chat";
const streamApiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const streamApiSecret = process.env.STREAM_API_SECRET_KEY;

if (!streamApiKey) {
  throw new Error("Need to set NEXT_PUBLIC_STREAM_API_KEY");
}

if (!streamApiSecret) {
  throw new Error("Need to set STREAM_API_SECRET_KEY");
}

export const serverClient = StreamChat.getInstance(
  streamApiKey,
  streamApiSecret
);
