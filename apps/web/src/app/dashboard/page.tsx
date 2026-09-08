export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
        Dashboard
      </p>
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mt-3 text-3xl text-foreground"
      >
        Welcome to CRWD.
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-muted">
        This is the base application shell — sidebar, top navigation,
        organization switcher, notifications, and a responsive mobile nav.
        Revenue, leads, campaigns, and AI insight modules are implemented
        in the dashboard build-out phase.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Revenue", "Active campaigns", "Pending approvals"].map((label) => (
          <div
            key={label}
            className="rounded-md border border-border bg-surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-faint">
              {label}
            </p>
            <p className="mt-3 text-2xl text-foreground">—</p>
            <p className="mt-1 text-xs text-foreground-faint">
              Connected in a later phase
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
