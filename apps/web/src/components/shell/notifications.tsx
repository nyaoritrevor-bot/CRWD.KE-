"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";

// Placeholder notifications — replaced once approvals + automations
// exist to generate real events (Phases 17–18).
const notifications = [
  {
    title: "Approval requested",
    detail: "Campaign launch needs your sign-off.",
    time: "Now",
  },
  {
    title: "Weekly report ready",
    detail: "CRWD AI prepared your business report.",
    time: "1h ago",
  },
];

export function Notifications() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="relative flex size-9 items-center justify-center rounded-sm border border-border bg-surface text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
          aria-label="View notifications"
        >
          <Bell className="size-4" strokeWidth={1.75} />
          <span className="absolute top-2 right-2 size-1.5 rounded-full bg-accent" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 w-80 rounded-sm border border-border bg-surface-raised p-1 shadow-lg"
        >
          <p className="px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint">
            Notifications
          </p>
          {notifications.map((note) => (
            <DropdownMenu.Item
              key={note.title}
              className="flex cursor-pointer flex-col gap-0.5 rounded-sm px-2.5 py-2 text-sm outline-none transition-colors hover:bg-surface"
            >
              <span className="text-foreground">{note.title}</span>
              <span className="text-xs text-foreground-muted">{note.detail}</span>
              <span className="text-[10px] text-foreground-faint">{note.time}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
