import { OrgSwitcher } from "@/components/shell/org-switcher";
import { Notifications } from "@/components/shell/notifications";
import { UserMenu } from "@/components/shell/user-menu";
import { MobileNav } from "@/components/shell/mobile-nav";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <MobileNav />
        <OrgSwitcher />
      </div>

      <div className="flex items-center gap-3">
        <Notifications />
        <UserMenu />
      </div>
    </header>
  );
}
