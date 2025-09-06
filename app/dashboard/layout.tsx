import UserSyncWrapper from "@/components/user-sync-wrapper";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <UserSyncWrapper>{children}</UserSyncWrapper>;
}
