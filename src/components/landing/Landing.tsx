import { useState } from "react";
import {
  Wallet,
  Receipt,
  Bell,
  RefreshCw,
  TrendingUp,
  FileText,
  Check,
  ArrowRight,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  Users,
  Clock,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-700 tracking-tight">TeamBudget</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Sign in
          </a>
          <Button asChild size="sm" className="rounded-full px-4">
            <a href="#pricing">Start free trial</a>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <a href="#pricing">Start free trial</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground"
      style={{ background: "var(--gradient-cta)" }}
    >
      <Trophy className="h-4 w-4" />
    </span>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Mobile-first · Built for the sideline
          </span>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-700 leading-[1.05] tracking-tight text-foreground">
            Finally know where{" "}
            <span className="relative whitespace-nowrap">
              every dollar
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full"
                style={{ background: "var(--brand-mint)" }}
              />
            </span>{" "}
            goes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Track fees, receipts, and spending from your phone — at the diamond,
            in the parking lot, or on the bus. TeamBudget gives parents, coaches,
            and treasurers real-time financial transparency, anywhere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6 text-base">
              <a href="#pricing">
                Launch your team dashboard <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6 text-base"
            >
              <a href="#how">Start your free pilot</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["#fecaca", "#bfdbfe", "#bbf7d0", "#fde68a"].map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            Trusted by <span className="font-semibold text-foreground">1,200+ teams</span> across the US
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] animate-fade-in items-center justify-center">
      {/* Phone frame */}
      <div
        className="relative rounded-[2.75rem] border border-border bg-[oklch(0.18_0.04_250)] p-3"
        style={{ boxShadow: "var(--shadow-lift)" }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-[oklch(0.18_0.04_250)]" />

        {/* Screen */}
        <div className="relative h-[600px] w-[280px] overflow-hidden rounded-[2rem] bg-card">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-semibold text-foreground/80">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            </span>
          </div>

          {/* Header */}
          <div className="px-5 pt-6">
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              U12 Lightning · Fall
            </p>
            <div className="mt-1 flex items-end justify-between">
              <p className="font-display text-[1.6rem] font-700 leading-none tracking-tight">
                $8,420
                <span className="ml-1 text-sm font-500 text-muted-foreground">
                  / $12k
                </span>
              </p>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{
                  background: "var(--brand-mint-soft)",
                  color: "oklch(0.32 0.12 170)",
                }}
              >
                On track
              </span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: "70%", background: "var(--gradient-cta)" }}
              />
            </div>
          </div>

          {/* Stat tiles */}
          <div className="mt-4 grid grid-cols-3 gap-2 px-5 text-center">
            {[
              { label: "In", val: "$8.4k" },
              { label: "Out", val: "$5.1k" },
              { label: "Left", val: "$3.3k" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-muted/60 px-1 py-2">
                <p className="font-display text-sm font-700">{s.val}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Activity list */}
          <p className="mt-5 px-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Recent activity
          </p>
          <ul className="mt-1 divide-y divide-border px-5">
            {[
              { who: "Tournament fees", amt: "-$420", tag: "Travel", neg: true },
              { who: "Reg · 4 parents", amt: "+$2,000", tag: "Fees" },
              { who: "Uniforms", amt: "-$612", tag: "Gear", neg: true },
            ].map((r) => (
              <li
                key={r.who}
                className="flex items-center justify-between py-2 text-xs"
              >
                <div>
                  <p className="font-medium text-foreground">{r.who}</p>
                  <p className="text-[10px] text-muted-foreground">{r.tag}</p>
                </div>
                <span
                  className={
                    "font-display text-sm font-700 " +
                    (r.neg ? "text-foreground" : "text-[oklch(0.55_0.16_160)]")
                  }
                >
                  {r.amt}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom tab bar */}
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-around rounded-2xl bg-muted/70 py-2 backdrop-blur">
            <span className="h-1.5 w-6 rounded-full bg-foreground" />
            <span className="h-1.5 w-6 rounded-full bg-foreground/30" />
            <span className="h-1.5 w-6 rounded-full bg-foreground/30" />
            <span className="h-1.5 w-6 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div
        className="absolute -right-4 top-16 hidden w-[230px] items-center gap-3 rounded-xl border border-border bg-card p-3 sm:flex lg:-right-10"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ background: "var(--brand-mint-soft)" }}
        >
          <Bell className="h-4 w-4" style={{ color: "oklch(0.32 0.12 170)" }} />
        </span>
        <div>
          <p className="text-sm font-semibold leading-tight">Fee collected · $250</p>
          <p className="text-xs text-muted-foreground">Jamie's mom · just now</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------- TRUST -------------------- */
function TrustStrip() {
  const stats = [
    { val: "$4.2M", label: "tracked across teams" },
    { val: "98%", label: "parent satisfaction" },
    { val: "12 hrs", label: "saved per treasurer / season" },
  ];
  const orgs = ["Little League", "AYSO", "Pop Warner", "TeamSnap", "SportsEngine"];
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Built for teams in
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {orgs.map((o) => (
            <span
              key={o}
              className="font-display text-base font-700 tracking-tight text-muted-foreground/70"
            >
              {o}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-800 tracking-tight text-foreground">
                {s.val}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROBLEM -------------------- */
function Problem() {
  const pains = [
    {
      icon: Wallet,
      title: "“Where did my $500 go?”",
      body: "Parents pay registration and never see a breakdown. Trust erodes fast.",
    },
    {
      icon: Receipt,
      title: "Spreadsheets + shoeboxes of receipts",
      body: "Treasurers burn nights reconciling Venmo, Zelle, cash, and crumpled receipts.",
    },
    {
      icon: Users,
      title: "Group-chat arguments",
      body: "Uniform costs and tournament fees turn into the season's longest text thread.",
    },
    {
      icon: Clock,
      title: "Volunteers quit",
      body: "When the books don't add up, nobody wants the treasurer job next year.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">
          The problem
        </p>
        <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
          Youth sports finances are broken.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every season, the same money drama plays out on every team in America.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-700">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SOLUTION -------------------- */
function Solution() {
  const benefits = [
    {
      icon: Users,
      title: "Parents see everything, live",
      body: "Read-only dashboard with every fee collected and every dollar spent — updated in real time.",
    },
    {
      icon: Receipt,
      title: "Treasurers ditch the spreadsheets",
      body: "Snap a receipt, we categorize it. Sync payments automatically. One source of truth.",
    },
    {
      icon: ShieldCheck,
      title: "Coaches stay out of money drama",
      body: "When the books are transparent, the texts stop. Coaches get to coach again.",
    },
  ];
  return (
    <section className="bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The fix
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
            Budget clarity, built for teams.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            TeamBudget is the financial layer between team organizers and the parents who pay
            them. Every transaction, every receipt, every dollar — visible, categorized, and
            shared with the people who care.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-accent-foreground"
                style={{ background: "var(--brand-mint-soft)" }}
              >
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-700">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- HOW IT WORKS -------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Create your team in 60 seconds",
      body: "Add your roster, set a season budget, and invite parents with a single link.",
    },
    {
      n: "02",
      title: "Connect payments + snap receipts",
      body: "Sync Stripe, Venmo, and Zelle. Auto-categorize every receipt with one photo.",
    },
    {
      n: "03",
      title: "Parents get a live, read-only view",
      body: "No more 'where did my money go?' Every parent sees the dashboard in real time.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          How it works
        </p>
        <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
          From chaos to clarity in three steps.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div
              className="rounded-2xl border border-border bg-card p-7 h-full"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p
                className="font-display text-5xl font-800 tracking-tight"
                style={{ color: "var(--brand-mint)" }}
              >
                {s.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-700">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */
function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-time budget dashboard",
      body: "See every dollar by category — registration, gear, travel, fundraising — updated instantly.",
    },
    {
      icon: Receipt,
      title: "Receipt capture & auto-tagging",
      body: "Snap a photo. We pull the vendor, amount, and category. Done.",
    },
    {
      icon: Bell,
      title: "Parent notifications",
      body: "Auto-alerts when fees are collected, big expenses post, or the team hits a budget threshold.",
    },
    {
      icon: RefreshCw,
      title: "TeamSnap & SportsEngine sync",
      body: "Two-way sync with the tools you already use. No double entry, ever.",
    },
    {
      icon: Wallet,
      title: "Fundraising tracker",
      body: "Run carwash, raffle, and team-store campaigns with live progress bars parents can share.",
    },
    {
      icon: FileText,
      title: "Season-end reports in one click",
      body: "Export a clean PDF for the league, the IRS, or the next treasurer.",
    },
  ];
  return (
    <section id="features" className="bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Features
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
            Everything your team treasurer wishes they had.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-cta)" }}
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-700">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "I went from 40 angry texts a week to zero. Parents just open the app and see exactly where their money went.",
      name: "Sarah K.",
      role: "Treasurer · U12 Lightning Soccer",
      bg: "#fecaca",
      initials: "SK",
    },
    {
      quote:
        "Finally, a tool that doesn't make me feel like an accountant. The receipt scanning alone saves me hours.",
      name: "Marcus T.",
      role: "Head Coach · Westside Little League",
      bg: "#bfdbfe",
      initials: "MT",
    },
    {
      quote:
        "As a parent, this is the first time I've actually trusted where our registration fee was going. Game changer.",
      name: "Priya R.",
      role: "Team Parent · Pop Warner U10",
      bg: "#bbf7d0",
      initials: "PR",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Loved by teams everywhere
        </p>
        <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
          Treasurers stop dreading their inbox.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <blockquote className="flex-1 font-display text-lg leading-snug text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-700 text-foreground"
                style={{ background: t.bg }}
              >
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-600 text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 rounded-2xl border border-border p-6 text-center"
        style={{ background: "var(--brand-mint-soft)" }}
      >
        <p className="font-display text-2xl font-700 text-foreground">
          ↓ 87% parent finance questions
        </p>
        <p className="font-display text-2xl font-700 text-foreground">
          ↑ 3.2× treasurer retention
        </p>
        <p className="font-display text-2xl font-700 text-foreground">
          ↓ 12 hrs admin / season
        </p>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$24",
      cadence: "/team / month",
      best: "Single team, getting started",
      features: [
        "Real-time budget dashboard",
        "Up to 30 parents",
        "Receipt capture (50/mo)",
        "Email notifications",
      ],
      cta: "Start free trial",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$49",
      cadence: "/team / month",
      best: "Multi-team clubs & busy treasurers",
      features: [
        "Everything in Starter",
        "Unlimited parents & receipts",
        "Multi-team dashboard",
        "TeamSnap + SportsEngine sync",
        "Priority support",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "for leagues & orgs",
      best: "Leagues, schools, white-label",
      features: [
        "Everything in Pro",
        "White-label & custom branding",
        "SSO + admin controls",
        "Dedicated success manager",
        "Custom integrations",
      ],
      cta: "Talk to us",
      highlighted: false,
    },
  ];
  return (
    <section id="pricing" className="bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
            Less than a single tournament fee.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl border p-7 " +
                (t.highlighted
                  ? "border-transparent text-primary-foreground"
                  : "border-border bg-card")
              }
              style={
                t.highlighted
                  ? { background: "var(--gradient-cta)", boxShadow: "var(--shadow-lift)" }
                  : { boxShadow: "var(--shadow-card)" }
              }
            >
              {t.highlighted && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-700"
                  style={{ background: "var(--brand-mint)", color: "oklch(0.18 0.05 220)" }}
                >
                  Most popular
                </span>
              )}
              <p
                className={
                  "font-display text-sm font-700 uppercase tracking-wider " +
                  (t.highlighted ? "opacity-80" : "text-muted-foreground")
                }
              >
                {t.name}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-800 tracking-tight">{t.price}</span>
                <span className={"text-sm " + (t.highlighted ? "opacity-80" : "text-muted-foreground")}>
                  {t.cadence}
                </span>
              </div>
              <p className={"mt-2 text-sm " + (t.highlighted ? "opacity-90" : "text-muted-foreground")}>
                Best for: {t.best}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={"mt-0.5 h-4 w-4 shrink-0 " + (t.highlighted ? "" : "")}
                      style={t.highlighted ? { color: "var(--brand-mint)" } : { color: "var(--brand-mint)" }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={t.highlighted ? "secondary" : "default"}
                className="mt-8 rounded-full"
              >
                <a href="#">{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const faqs = [
    {
      q: "Do parents need to download anything?",
      a: "No. Parents get a private web link to a read-only dashboard. It works on any phone or laptop, no app install required.",
    },
    {
      q: "How does TeamBudget compare to a spreadsheet?",
      a: "Spreadsheets don't sync with your payment apps, don't read receipts, don't notify parents, and don't survive a treasurer handoff. TeamBudget does all four.",
    },
    {
      q: "Is our team's financial data secure?",
      a: "Yes. All data is encrypted in transit and at rest, hosted in US-based SOC 2 compliant infrastructure. Parents only ever see read-only views.",
    },
    {
      q: "Which payment systems do you integrate with?",
      a: "Stripe, Venmo, Zelle, PayPal, and direct bank deposits today. TeamSnap and SportsEngine for roster + payment sync.",
    },
    {
      q: "What happens when the season ends?",
      a: "Export a clean PDF + CSV for the league or the next treasurer in one click. Your data stays in your account as long as you want it.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel any month, no questions asked. We also offer a 30-day money-back guarantee on every paid plan.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-4xl font-700 tracking-tight sm:text-5xl">
          Questions, answered.
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-base font-600">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-10 text-center text-primary-foreground sm:p-16"
        style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-lift)" }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--brand-mint)" }}
        />
        <h2 className="relative font-display text-4xl font-800 tracking-tight sm:text-5xl">
          Stop chasing receipts.
          <br />
          Start trusting your books.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base opacity-90 sm:text-lg">
          Join 1,200+ youth sports teams who replaced spreadsheets, group-chat fights, and
          guesswork with one shared source of truth.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-base">
            <a href="#">
              Start your free trial <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <a
            href="#how"
            className="text-sm font-medium underline-offset-4 hover:underline opacity-90"
          >
            Watch the 2-min demo →
          </a>
        </div>
        <p className="relative mt-6 flex items-center justify-center gap-2 text-xs opacity-80">
          <ShieldCheck className="h-4 w-4" />
          30-day money-back guarantee · No card required to start
        </p>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Resources", links: ["Help center", "Treasurer guide", "API docs", "Security"] },
    { title: "Legal", links: ["Privacy", "Terms", "DPA"] },
  ];
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-lg font-700">TeamBudget</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Real-time financial transparency for youth sports teams. Made by parents, for
            parents.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-display text-sm font-700">{c.title}</p>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground lg:px-8">
          <p>© {new Date().getFullYear()} TeamBudget, Inc. All rights reserved.</p>
          <p>Made for the 200,000+ youth sports teams across the US 🏆</p>
        </div>
      </div>
    </footer>
  );
}