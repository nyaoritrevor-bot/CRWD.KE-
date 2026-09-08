"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  Megaphone,
  Rocket,
  FileText,
  Users,
  Contact,
  BarChart3,
  Search,
  ListChecks,
  Workflow,
  BookOpen,
  ShieldCheck,
  Plug,
  UsersRound,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const primaryNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/ai", label: "AI Command Center", icon: Sparkles },
];

const growthNav: NavItem[] = [
  { href: "/marketing", label: "Marketing", icon: Megaphone },
  { href: "/campaigns", label: "Campaigns", icon: Rocket },
  { href: "/content", label: "Content", icon: FileText },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/crm", label: "CRM", icon: Contact },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/research", label: "Research", icon: Search },
];

const systemNav: NavItem[] = [
  { href: "/tasks", label: "Tasks", icon: ListChecks },
  { href: "/automations", label: "Automations", icon: Workflow },
  { href: "/knowledge", label: "Knowledge", icon: BookOpen },
  { href: "/approvals", label: "Approvals", icon: ShieldCheck },
  { href: "/integrations", label: "Integrations", icon: Plug },
];

const orgNav: NavItem[] = [
  { href: "/team", label: "Team", icon: UsersRound },
  { href: "/settings", label: "Settings", icon: Settings },
];

function NavGroup({
  label,
  items,
  pathname,
  onNavigate,
}: {
  label?: string;
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div>
      {label ? (
        <p className="px-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint">
          {label}
        </p>
      ) : null}
      <ul className={cn("space-y-0.5", label && "mt-2")}>
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-surface-raised text-foreground"
                    : "text-foreground-muted hover:bg-surface hover:text-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col gap-6 overflow-y-auto px-3 py-6">
      <NavGroup items={primaryNav} pathname={pathname} onNavigate={onNavigate} />
      <NavGroup
        label="Growth"
        items={growthNav}
        pathname={pathname}
        onNavigate={onNavigate}
      />
      <NavGroup
        label="System"
        items={systemNav}
        pathname={pathname}
        onNavigate={onNavigate}
      />
      <NavGroup
        label="Organization"
        items={orgNav}
        pathname={pathname}
        onNavigate={onNavigate}
      />
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-background md:block">
      <div className="flex h-16 items-center border-b border-border px-5">
        <Link
          href="/dashboard"
          className="font-mono text-sm font-medium tracking-[0.2em] text-foreground"
        >
          CRWD<span className="text-accent">.</span>
        </Link>
      </div>
      <SidebarNav />
    </aside>
  );
}
