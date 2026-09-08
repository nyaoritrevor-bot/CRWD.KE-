import { SiteNav } from "@/components/marketing/site-nav";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
            About
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-4 max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl"
          >
            This page is being built in a later phase.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-foreground-muted">
            The About page is scoped in the CRWD development plan and
            will be implemented once the design system and site build-out
            phase begins.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
