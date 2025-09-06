"use client";

import { createToken } from "@/actions/create-token";
import { api } from "@/convex/_generated/api";
import { streamClient } from "@/lib/stream";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

export default function UserSyncWrapper({ children }: { children: ReactNode }) {
  const { isLoaded, user } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const upsertUserMutation = useMutation(api.user.upsertUser);

  const syncUser = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const tokenProvider = async () => {
        if (!user.id) {
          throw new Error("User is not authenticated");
        }
        const token = await createToken(user.id);
        return token;
      };

      await upsertUserMutation({
        userId: user.id,
        email: user.emailAddresses?.[0]?.emailAddress ?? "",
        imageUrl: user.imageUrl ?? "",
        name: user.username ?? user.firstName ?? "Unknown User",
      });

      await streamClient.connectUser(
        {
          id: user.id,
          name: user.username ?? user.firstName ?? "Unknown User",
          image: user.imageUrl ?? "",
        },
        tokenProvider
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sync user");
    } finally {
      setLoading(false);
    }
  }, [user, upsertUserMutation]);

  const disconnectUser = useCallback(async () => {
    if (!user?.id) return;
    try {
      await streamClient.disconnectUser(Number(user.id));
    } catch (err) {
      console.error(err);
    }
  }, [user?.id]);

  useEffect(() => {
    if (!isLoaded) return;

    if (user) {
      syncUser();
    } else {
      disconnectUser();
      setLoading(false);
    }

    return () => {
      if (user) disconnectUser();
    };
  }, [user, isLoaded, syncUser, disconnectUser]);

  if (error) return <div>Error: {error}</div>;

  if (loading || !isLoaded) return <div>Loading...</div>;

  return <>{children}</>;
}
