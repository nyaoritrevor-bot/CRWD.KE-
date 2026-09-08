"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown, Check, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder org list — replaced by real organization data once
// organizations + roles are implemented (Phase 5).
const organizations = [
  { id: "org_demo", name: "Demo Organization" },
];

export function OrgSwitcher() {
  const [active, setActive] = React.useState(organizations[0].id);
  const current = organizations.find((org) => org.id === active)!;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-border-strong"
          aria-label="Switch organization"
        >
          <Building2 className="size-3.5 text-foreground-faint" strokeWidth={1.75} />
          <span className="max-w-[10rem] truncate">{current.name}</span>
          <ChevronsUpDown className="size-3.5 text-foreground-faint" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={6}
          className="z-50 min-w-56 rounded-sm border border-border bg-surface-raised p-1 shadow-lg"
        >
          {organizations.map((org) => (
            <DropdownMenu.Item
              key={org.id}
              onSelect={() => setActive(org.id)}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 text-sm text-foreground-muted outline-none transition-colors hover:bg-surface hover:text-foreground",
              )}
            >
              {org.name}
              {org.id === active ? (
                <Check className="size-3.5 text-accent" />
              ) : null}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className="cursor-pointer rounded-sm px-2.5 py-2 text-sm text-foreground-muted outline-none transition-colors hover:bg-surface hover:text-foreground">
            Create organization
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
