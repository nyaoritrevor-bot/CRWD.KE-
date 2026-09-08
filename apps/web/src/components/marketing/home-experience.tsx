"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart3, Bot, CircleDot, Cpu, Menu, MoveUpRight, ScanLine, Sparkles, Target, Workflow, X } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  { icon: Target, index: "01", title: "Marketing", text: "Positioning, creative and campaigns engineered to compound attention." },
  { icon: Workflow, index: "02", title: "Automation", text: "The workflows that turn intent into movement while your team sleeps." },
  { icon: BarChart3, index: "03", title: "Intelligence", text: "A living view of the signals behind every consequential decision." },
  { icon: Cpu, index: "04", title: "Operations", text: "The operating rhythm that keeps ambitious companies moving." },
];

const process = ["Discover", "Strategy", "Build", "Automate", "Scale"];

function GlassButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`magnetic group inline-flex items-center gap-5 rounded-full border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition-all ${secondary ? "border-white/15 bg-white/[0.025] text-white/70 hover:border-white/35 hover:text-white" : "border-white/20 bg-white text-black hover:bg-white/85"}`}><span>{children}</span><ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>;
}

function NoiseOverlay() { return <div className="noise-overlay" aria-hidden="true" />; }

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 2200); return () => window.clearTimeout(timer); }, []);
  if (!visible) return null;
  return <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.75, duration: .45 }} className="loading-screen"><motion.div initial={{ opacity: 0, scale: .88, filter: "blur(14px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.2, ease: "easeOut" }} className="loading-mark"><Image src="/logo/CRWD%20KE%20transparent%20logo.png" alt="CRWD KE" width={280} height={280} priority /><small>AI GROWTH FIRM</small></motion.div></motion.div>;
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100); const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 }); const sy = useSpring(y, { stiffness: 500, damping: 35 });
  useEffect(() => { const fine = window.matchMedia("(pointer: fine)"); setEnabled(fine.matches); if (!fine.matches) return; const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); }; window.addEventListener("mousemove", move); return () => window.removeEventListener("mousemove", move); }, [x, y]);
  if (!enabled) return null;
  return <motion.div className="custom-cursor" style={{ left: sx, top: sy }}><span /></motion.div>;
}

function Dashboard() {
  return <motion.div className="dashboard" animate={{ y: [0, -18, 0], rotate: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
    <div className="dash-top"><span><CircleDot size={12} /> CRWD AI / COMMAND CENTER</span><span className="live"><i /> LIVE</span></div>
    <div className="dash-title"><div><small>BUSINESS HEALTH</small><strong>87<span>%</span></strong></div><div className="dash-arrow"><MoveUpRight size={19} /> +12.4%</div></div>
    <div className="chart"><div className="chart-grid" /><svg viewBox="0 0 500 130" preserveAspectRatio="none"><motion.path d="M0 106 C35 105 43 76 78 87 S128 63 160 76 S211 24 250 53 S300 50 335 63 S373 12 410 35 S462 18 500 5" fill="none" stroke="white" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, delay: .6 }} /></svg></div>
    <div className="dash-metrics"><div><small>LEADS</small><b>1,243</b><em>+18.6%</em></div><div><small>ROI</small><b>4.2x</b><em>+0.8x</em></div><div><small>REVENUE</small><b>$84.2k</b><em>+24.1%</em></div></div>
    <div className="dash-footer"><span><ScanLine size={14} /> SIGNALS ALIGNED</span><span>LAST SYNC / 02:48:19</span></div>
  </motion.div>;
}

export function HomeExperience() {
  const [menu, setMenu] = useState(false);
  const mx = useMotionValue(0); const my = useMotionValue(0); const px = useTransform(mx, [-1, 1], [-12, 12]); const py = useTransform(my, [-1, 1], [-10, 10]);
  useEffect(() => { const move = (event: MouseEvent) => { mx.set(event.clientX / window.innerWidth * 2 - 1); my.set(event.clientY / window.innerHeight * 2 - 1); }; window.addEventListener("mousemove", move); return () => window.removeEventListener("mousemove", move); }, [mx, my]);
  return <div className="home-experience"><LoadingScreen /><CustomCursor /><NoiseOverlay />
    <header className="site-header"><Link href="/" className="brand-mark" aria-label="CRWD KE home"><Image src="/logo/CRWD%20KE%20transparent%20logo.png" alt="CRWD KE" width={96} height={48} priority /></Link><nav>{["Services", "AI", "Work", "About", "Contact"].map((item) => <Link key={item} href={`/${item.toLowerCase()}`}>{item}</Link>)}</nav><GlassButton href="/contact">Start a project</GlassButton><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={20} /> : <Menu size={20} />}</button></header>
    {menu && <div className="mobile-menu">{["Services", "AI", "Work", "About", "Contact"].map((item) => <Link onClick={() => setMenu(false)} key={item} href={`/${item.toLowerCase()}`}>{item}<ArrowUpRight size={16} /></Link>)}</div>}
    <main>
      <section className="hero section-frame"><motion.div className="hero-orbit orbit-one" style={{ x: px, y: py }} /><motion.div className="hero-orbit orbit-two" style={{ x: py, y: px }} /><div className="hero-copy"><Image className="hero-brand-image" src="/logo/CRWD%20KE%20transparent%20logo.png" alt="CRWD KE" width={180} height={180} priority /><p className="eyebrow"><span className="eyebrow-line" /> NAIROBI / 01</p><h1>GROW<br /><i>DIFFERENT.</i><br />MOVE<br /><i>SMARTER.</i></h1><p className="hero-intro">AI-powered marketing, automation, and business intelligence for ambitious brands ready to outgrow their category.</p><div className="hero-actions"><GlassButton href="/contact">Start a project</GlassButton><GlassButton href="/ai" secondary>Explore CRWD AI</GlassButton></div></div><div className="hero-device"><div className="device-label">THE NEW GROWTH FUNCTION <span>↗</span></div><Dashboard /></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>AI GROWTH FIRM / 2026</span></div></section>
      <section className="manifesto section-frame"><div className="section-meta"><span>02 / CAPABILITIES</span><span>ONE SYSTEM. FULL SPECTRUM.</span></div><div className="manifesto-heading">Growth is no longer<br /><span>a department.</span></div><p className="manifesto-copy">It is a system. CRWD brings strategy, creativity, intelligence, and operations into one continuous motion.</p><div className="service-grid">{services.map(({ icon: Icon, index, title, text }) => <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className="service-card" key={title}><div className="card-top"><span>{index}</span><Icon size={20} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18} /></motion.div>)}</div></section>
      <section className="systems section-frame"><div className="section-meta"><span>03 / THE SHIFT</span><span>FROM NOISE TO SIGNAL</span></div><div className="systems-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> A BETTER QUESTION</p><h2>YOUR BUSINESS<br />DOESN&apos;T HAVE A<br /><i>MARKETING</i><br />PROBLEM.</h2><h2 className="systems-strong">IT HAS A<br /><i>SYSTEMS</i><br />PROBLEM.</h2></div><div className="systems-visual"><div className="visual-cross" /><div className="visual-caption"><span>01</span><p>Complexity, made visible.<br />Momentum, made repeatable.</p></div></div></div></section>
      <section className="ai-section section-frame"><div className="section-meta"><span>04 / CRWD AI</span><span>THE COMMAND CENTER</span></div><div className="ai-heading"><p className="eyebrow"><span className="eyebrow-line" /> INTELLIGENCE THAT MOVES</p><h2>THE FIRM<br />THAT NEVER<br /><i>STOPS</i><br />OPERATING.</h2><GlassButton href="/ai" secondary>Meet CRWD AI</GlassButton></div><div className="ai-dashboard"><div className="ai-bar"><span><Bot size={15} /> SYSTEM STATUS</span><b>ALL SYSTEMS NOMINAL</b></div><div className="ai-body"><div className="ai-rail"><small>AGENTS</small>{["Marketing", "Sales", "Research", "Analytics"].map((agent, index) => <div className={index === 0 ? "agent active" : "agent"} key={agent}><i />{agent}<span>↗</span></div>)}</div><div className="ai-main"><div className="ai-main-head"><div><small>MARKETING AGENT / ACTIVE</small><strong>Good morning, team.</strong></div><Sparkles size={18} /></div><p>We found three high-intent signals in your market. The strongest opportunity is a narrative shift around operational speed.</p><div className="ai-signal"><div className="signal-bars"><i /><i /><i /><i /><i /></div><div><small>OPPORTUNITY INDEX</small><b>92.4</b></div><ArrowUpRight /></div><div className="prompt-line"><span>Ask CRWD AI anything...</span><ArrowUpRight size={17} /></div></div></div></div></section>
      <section className="process section-frame"><div className="section-meta"><span>05 / PROCESS</span><span>BUILT FOR COMPOUNDING</span></div><h2>THE PATH<br />FROM <i>INSIGHT</i><br />TO IMPACT.</h2><div className="process-track">{process.map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><div className="process-node" /><strong>{step}</strong><p>{["See the whole picture.", "Design the advantage.", "Make it real.", "Let the system run.", "Build on what works."][index]}</p></div>)}</div></section>
      <section className="final-cta section-frame"><p className="eyebrow">06 / NEXT MOVE</p><h2>READY TO BUILD<br /><i>THE FUTURE?</i></h2><GlassButton href="/contact">Start a project</GlassButton></section>
    </main><footer className="site-footer"><div className="brand-mark"><Image src="/logo/CRWD%20KE%20transparent%20logo.png" alt="CRWD KE" width={128} height={64} /></div><p>AI Growth Firm<br />Nairobi / Worldwide</p><span>© 2026 CRWD KE</span></footer>
  </div>;
}
