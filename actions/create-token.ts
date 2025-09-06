"use server";

import { serverClient } from "@/lib/streamServer";

export const createToken = async (id: string) => {
  const token = serverClient.createToken(id);
  return token;
};
