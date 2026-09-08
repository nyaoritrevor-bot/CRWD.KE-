import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AgentTrace } from "@/components/marketing/agent-trace";

/* ---------------------------------------------------------------------- */
/* 1. Hero                                                                 */
/* ---------------------------------------------------------------------- */

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
        Marketing · Automation · Intelligence · Operations
      </p>
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mt-6 max-w-3xl text-4xl leading-[1.1] font-normal text-foreground sm:text-6xl"
      >
        Growth, run by a firm that never stops operating.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
        CRWD pairs a premium growth studio with CRWD AI, a system that
        studies your business, researches your market, and runs your
        marketing operations day to day — proposing every consequential
        move for your approval before it acts.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button asChild size="lg">
          <Link href="/contact">Start a growth engagement</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/ai">Explore CRWD AI</Link>
        </Button>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 2. Positioning                                                         */
/* ---------------------------------------------------------------------- */

export function Positioning() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
            What CRWD is
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-4 text-3xl leading-tight text-foreground"
          >
            One growth function, two forms.
          </h2>
        </div>
        <div className="space-y-8 text-foreground-muted">
          <div>
            <h3 className="font-mono text-sm text-foreground">A growth firm.</h3>
            <p className="mt-2 leading-relaxed">
              Strategists, brand designers, and media operators who plan and
              build the foundation of a company&apos;s growth — positioning,
              identity, campaigns, and the systems that connect them.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-foreground">
              An operating system.
            </h3>
            <p className="mt-2 leading-relaxed">
              CRWD AI keeps that growth function running between
              engagements — reading performance data, drafting the next
              campaign, qualifying leads, and surfacing what needs a
              decision from your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 3. Services                                                            */
/* ---------------------------------------------------------------------- */

const services = [
  {
    title: "Strategy & positioning",
    detail: "Category definition, narrative, and go-to-market planning.",
  },
  {
    title: "Brand & content",
    detail: "Identity systems, campaign creative, and always-on content.",
  },
  {
    title: "Market & competitor research",
    detail: "Structured research CRWD AI keeps current after launch.",
  },
  {
    title: "Campaigns & media",
    detail: "Planning, production, and cross-channel campaign management.",
  },
  {
    title: "Revenue operations",
    detail: "CRM, lead scoring, and pipeline built for AI-assisted follow-up.",
  },
  {
    title: "AI automation",
    detail: "Workflows that trigger, qualify, and act inside your business.",
  },
];

export function Services() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
          Services
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-4 max-w-xl text-3xl leading-tight text-foreground"
        >
          Everything a growth function needs, under one system.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-8">
              <h3 className="text-base font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 4. AI capabilities                                                     */
/* ---------------------------------------------------------------------- */

const capabilities = [
  {
    title: "Understands the business",
    detail:
      "Holds durable context on your positioning, audience, and offer — not just chat history.",
  },
  {
    title: "Researches continuously",
    detail:
      "Tracks market and competitor movement so strategy doesn't go stale between reviews.",
  },
  {
    title: "Builds campaigns and content",
    detail:
      "Drafts campaigns, content, and reports grounded in your own knowledge base.",
  },
  {
    title: "Acts with permission",
    detail:
      "Executes low-risk work automatically and routes anything consequential to you first.",
  },
];

export function AiCapabilities() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
            CRWD AI
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-4 text-3xl leading-tight text-foreground"
          >
            An operator, not a chat window.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground-muted">
            CRWD AI is built as an agentic system with tools, memory,
            knowledge retrieval, and approvals — designed to run parts of
            your growth operation, not just answer questions about it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="flex gap-5">
              <span className="font-mono text-sm text-foreground-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {cap.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 5. Selected work                                                       */
/* ---------------------------------------------------------------------- */

const work = [
  {
    client: "Northline Freight",
    summary: "Repositioning and demand-gen system for a logistics operator.",
    tag: "Strategy · Campaigns",
  },
  {
    client: "Aster & Co.",
    summary: "Brand identity and e-commerce rebuild ahead of a national launch.",
    tag: "Brand · Web",
  },
  {
    client: "Verdant Labs",
    summary: "CRM and AI lead-scoring for a fast-growing B2B pipeline.",
    tag: "Revenue Ops · AI",
  },
];

export function SelectedWork() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
              Selected work
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-3xl leading-tight text-foreground"
            >
              Recent engagements.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden text-sm text-foreground-muted transition-colors hover:text-foreground sm:block"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {work.map((item) => (
            <div
              key={item.client}
              className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
            >
              <h3 className="text-lg text-foreground">{item.client}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {item.summary}
              </p>
              <span className="font-mono text-xs text-foreground-faint">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 6. Growth process — order is real here, so numbering is warranted      */
/* ---------------------------------------------------------------------- */

const process = [
  {
    step: "Diagnose",
    detail: "Audit the business, market, and existing growth system.",
  },
  {
    step: "Architect",
    detail: "Design positioning, brand, and the campaigns that carry it.",
  },
  {
    step: "Operate",
    detail: "Launch CRWD AI on your data to run day-to-day execution.",
  },
  {
    step: "Compound",
    detail: "Review AI-surfaced insight and approve the next move.",
  },
];

export function GrowthProcess() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
          How it works
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-4 max-w-xl text-3xl leading-tight text-foreground"
        >
          A process built to hand off to the machine.
        </h2>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <li key={item.step} className="border-t border-border-strong pt-5">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {item.step}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 7. AI Command Center preview                                           */
/* ---------------------------------------------------------------------- */

export function CommandCenterPreview() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
            AI Command Center
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-4 text-3xl leading-tight text-foreground"
          >
            Watch the system reason before it acts.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground-muted">
            Every request moves through the same pipeline: context,
            memory, the right specialist agent, a risk check, then a
            proposed action. Nothing above low risk executes without your
            sign-off.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/ai">See the AI Command Center</Link>
          </Button>
        </div>
        <AgentTrace />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 8. Final CTA                                                           */
/* ---------------------------------------------------------------------- */

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl"
        >
          Bring in a growth function that operates every day, not just at
          the start of a quarter.
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Start a growth engagement</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/ai">Explore CRWD AI</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
