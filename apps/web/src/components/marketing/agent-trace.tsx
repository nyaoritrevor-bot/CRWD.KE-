"use client";

import { motion } from "framer-motion";

type TraceLine = {
  label: string;
  detail: string;
  tone?: "default" | "accent" | "muted";
};

const lines: TraceLine[] = [
  { label: "intent", detail: "grow qualified pipeline this quarter" },
  { label: "memory", detail: "recalled 3 relevant business facts", tone: "muted" },
  { label: "agent", detail: "routed to Marketing Agent", tone: "accent" },
  { label: "tool", detail: "analyze_campaign · search_leads" },
  { label: "risk", detail: "medium — approval required", tone: "muted" },
  { label: "output", detail: "3 campaigns drafted, 12 leads prioritized", tone: "accent" },
];

export function AgentTrace() {
  return (
    <div className="w-full rounded-md border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-wide text-foreground-muted">
            CRWD AI — orchestrator trace
          </span>
        </div>
        <span className="font-mono text-[10px] text-foreground-faint">live</span>
      </div>

      <div className="space-y-3 px-4 py-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={line.label + i}
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12, ease: "easeOut" }}
            className="flex gap-3"
          >
            <span className="w-16 shrink-0 text-foreground-faint">{line.label}</span>
            <span
              className={
                line.tone === "accent"
                  ? "text-accent"
                  : line.tone === "muted"
                    ? "text-foreground-muted"
                    : "text-foreground"
              }
            >
              {line.detail}
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: lines.length * 0.12 + 0.2 }}
          className="flex items-center gap-2 pt-1 text-foreground-faint"
        >
          <span className="w-16 shrink-0" />
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-accent" />
        </motion.div>
      </div>
    </div>
  );
}
