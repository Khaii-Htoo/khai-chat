import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      <Logo />
      <div className="flex items-center justify-between space-x-2">
        <ThemeToggle />
        <Button variant={"outline"}>
          <Plus />
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
