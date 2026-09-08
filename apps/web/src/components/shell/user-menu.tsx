"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

// Placeholder user — replaced once Supabase auth is wired up (Phase 4).
const user = { name: "Jordan Avery", email: "jordan@example.com" };

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex size-9 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-foreground transition-colors hover:border-border-strong"
          aria-label="Open user menu"
        >
          {initials(user.name)}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-56 rounded-sm border border-border bg-surface-raised p-1 shadow-lg"
        >
          <div className="px-2.5 py-2">
            <p className="text-sm text-foreground">{user.name}</p>
            <p className="text-xs text-foreground-faint">{user.email}</p>
          </div>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm text-foreground-muted outline-none transition-colors hover:bg-surface hover:text-foreground">
            <User className="size-3.5" strokeWidth={1.75} />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm text-foreground-muted outline-none transition-colors hover:bg-surface hover:text-foreground">
            <Settings className="size-3.5" strokeWidth={1.75} />
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm text-danger outline-none transition-colors hover:bg-surface">
            <LogOut className="size-3.5" strokeWidth={1.75} />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
