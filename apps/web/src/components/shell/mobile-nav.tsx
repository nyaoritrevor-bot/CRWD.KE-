"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { SidebarNav } from "@/components/shell/sidebar";

export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="flex size-9 items-center justify-center rounded-sm border border-border bg-surface text-foreground-muted md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-4" strokeWidth={1.75} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-background md:hidden">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <span className="font-mono text-sm font-medium tracking-[0.2em] text-foreground">
              CRWD<span className="text-accent">.</span>
            </span>
            <Dialog.Close asChild>
              <button
                className="flex size-8 items-center justify-center rounded-sm text-foreground-muted hover:text-foreground"
                aria-label="Close navigation"
              >
                <X className="size-4" strokeWidth={1.75} />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <div>
              <SidebarNav />
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
