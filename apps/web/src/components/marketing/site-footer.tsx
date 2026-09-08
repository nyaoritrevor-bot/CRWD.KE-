import Link from "next/link";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/ai", label: "CRWD AI" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Request access" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <span className="font-mono text-sm font-medium tracking-[0.2em] text-foreground">
              CRWD<span className="text-accent">.</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              An AI-native growth firm and operating system for businesses
              that intend to outgrow their category.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-faint">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-xs text-foreground-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CRWD. All rights reserved.</p>
          <p className="font-mono">Built with CRWD AI.</p>
        </div>
      </div>
    </footer>
  );
}
