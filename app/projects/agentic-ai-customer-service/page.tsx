import type { Metadata } from "next";
import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuCheck,
  LuGithub,
  LuTerminal,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Agentic AI Customer Service Assistant",
  description:
    "An in-development customer service assistant: Python data preparation, a DuckDB development database, and SQL order lookups, with AI routing planned.",
  alternates: { canonical: "/projects/agentic-ai-customer-service" },
};

const githubUrl =
  "https://github.com/Mohamed254-pixel/Agentic-AI-customer-service";

const contributions = [
  ["Data preparation & validation", "CSV exploration, quality checks, and repository setup.", "4220ab4"],
  ["Development sample", "10K orders with matching products and line items.", "bd564b7"],
  ["DuckDB & SQL queries", "Database setup and customer-order lookup functions.", "c109ba9"],
  ["Manual query checks", "A script to inspect order and product lookup results.", "c109ba9"],
];

function FlowArrow() {
  return (
    <li className="flex items-center justify-center py-1 text-zinc-500" aria-hidden="true">
      <LuArrowRight className="h-4 w-4 rotate-90 lg:rotate-0" />
    </li>
  );
}

function FlowNode({ title }: { title: string }) {
  return (
    <li className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
      <h4 className="text-sm font-semibold leading-6 text-zinc-200">{title}</h4>
    </li>
  );
}

export default function AgenticCustomerServiceProject() {
  return (
    <main className="site-enter min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-8">
      <div className="fixed inset-0 pointer-events-none grid-background" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto">
        <Link href="/#portfolio" className="text-sm text-zinc-400 hover:text-white transition">
          ← Back to Portfolio
        </Link>

        <header className="pt-16 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-xs tracking-[0.25em] text-zinc-400 uppercase">AI · Software · Data Engineering</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> In Development
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02]">
            Agentic AI<br />Customer Service Assistant
          </h1>
          <p className="mt-7 max-w-3xl text-sm md:text-base text-zinc-400 leading-7">
            A Python and DuckDB backend for exploring historical Instacart
            orders. Customer-order lookups are implemented; AI agents and the
            customer-facing app are next.
          </p>
          <p className="mt-4 text-xs leading-6 text-zinc-500">
            Four-member group project · BUS4 118S · San José State University
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="premium-button">
              <LuGithub size={16} /> View Source Code <LuArrowUpRight size={16} />
            </a>
            <a href="#contributions" className="ghost-button">My Contributions ↓</a>
          </div>
        </header>

        <section id="scale" className="scroll-mt-8 mb-12 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 md:p-8" aria-labelledby="scale-title">
          <p className="section-kicker">Dataset</p>
          <h2 id="scale-title" className="mt-4 text-2xl md:text-3xl font-bold tracking-[-0.03em]">Built on a 10K-order development sample.</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-7">
            {[
              ["3.4M+", "historical orders", "Full source dataset"],
              ["33.8M+", "order-product records", "Full source · prior + train"],
              ["49K+", "products", "Full source dataset"],
              ["10K", "development orders", "Local sample database"],
            ].map(([value, label, scope]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-zinc-300">{label}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.12em] leading-5 text-zinc-500">{scope}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-zinc-400">
            Full-source figures describe the Instacart dataset. Local development
            and query checks use the 10K-order sample.
          </p>
        </section>

        <section aria-label="Technology stack" className="grid gap-4 md:grid-cols-2 mb-12">
          {[
            { label: "Implemented Stack", items: ["Python", "DuckDB", "SQL", "Pandas"] },
            { label: "Planned Stack", items: ["LangGraph", "OpenAI API", "MemorySaver"] },
          ].map(({ label, items }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">{label}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {items.map((item) => <span key={item} className="skill-pill">{item}</span>)}
              </div>
            </div>
          ))}
        </section>

        <section id="architecture" className="scroll-mt-8 border-t border-white/10 py-10" aria-labelledby="architecture-title">
          <p className="section-kicker">System Architecture</p>
          <h2 id="architecture-title" className="mt-4 text-3xl md:text-4xl font-bold tracking-[-0.03em]">How it works.</h2>
          <div className="mt-7 rounded-[24px] border border-white/10 bg-white/[0.025] p-5 md:p-7">
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-300"><LuCheck aria-hidden="true" /> Implemented Backend</h3>
            <ol className="grid gap-2 lg:grid-cols-[1fr_16px_1fr_16px_1fr_16px_1fr] mt-5" aria-label="Implemented data flow">
              <FlowNode title="Instacart CSV" />
              <FlowArrow />
              <FlowNode title="Python Data Pipeline" />
              <FlowArrow />
              <FlowNode title="DuckDB Database" />
              <FlowArrow />
              <FlowNode title="SQL Query Functions" />
            </ol>
          </div>
          <div className="mt-4 rounded-[24px] border border-dashed border-white/20 bg-white/[0.015] p-5 md:p-7">
            <h3 className="text-xs uppercase tracking-[0.18em] text-zinc-400">Planned AI System</h3>
            <ol className="grid gap-2 lg:grid-cols-[1fr_16px_1fr_16px_1.3fr_16px_1fr] mt-5" aria-label="Planned AI flow">
              <FlowNode title="Customer Question" />
              <FlowArrow />
              <FlowNode title="LangGraph Router" />
              <FlowArrow />
              <li className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-4">
                <h4 className="mb-3 text-[10px] uppercase tracking-[0.12em] text-zinc-400">Specialized Agents</h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {["Order History Agent", "Product Recommendation Agent", "Customer Support Agent"].map((agent) => (
                    <li key={agent} className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 leading-5">{agent}</li>
                  ))}
                </ul>
              </li>
              <FlowArrow />
              <FlowNode title="AI Response" />
            </ol>
            <div className="grid gap-3 sm:grid-cols-2 mt-4 border-t border-white/10 pt-4">
              <p className="rounded-xl border border-dashed border-white/15 p-4 text-xs leading-6 text-zinc-400"><span className="block font-medium text-zinc-300">OpenAI API · Planned</span>Language model integration</p>
              <p className="rounded-xl border border-dashed border-white/15 p-4 text-xs leading-6 text-zinc-400"><span className="block font-medium text-zinc-300">MemorySaver · Planned</span>Conversation memory</p>
            </div>
            <p className="mt-4 text-xs leading-6 text-zinc-500">Next: customer-facing app and end-to-end AI testing.</p>
          </div>
        </section>

        <section id="contributions" className="scroll-mt-8 border-t border-white/10 py-10" aria-labelledby="contributions-title">
          <p className="section-kicker">My Contributions</p>
          <h2 id="contributions-title" className="mt-4 text-3xl font-bold tracking-[-0.03em]">The backend foundation.</h2>
          <div className="grid gap-3 md:grid-cols-2 mt-6">
            {contributions.map(([title, description, commit]) => (
              <a key={title} href={`${githubUrl}/commit/${commit}`} target="_blank" rel="noreferrer" className="project-card p-5">
                <h3 className="flex items-center justify-between gap-3 text-sm font-semibold">{title}<LuArrowUpRight className="shrink-0 text-zinc-500" aria-hidden="true" /></h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
              </a>
            ))}
          </div>
        </section>

        <details className="group rounded-[24px] border border-white/10 bg-white/[0.02] mb-10">
          <summary className="cursor-pointer p-6 text-sm font-medium text-zinc-300 hover:text-white">
            Technical decisions &amp; validation
          </summary>
          <div className="border-t border-white/10 p-6">
            <dl className="grid gap-5 sm:grid-cols-2 text-sm leading-6">
              {[
                ["DuckDB", "Analytical SQL without a separate database server."],
                ["Development sample", "Smaller inputs for faster local iteration."],
                ["SQL lookups", "Parameterized IDs, read-only connections, and product joins."],
                ["Python", "Connects CSV preparation, database loading, and query functions."],
              ].map(([title, description]) => (
                <div key={title}><dt className="font-medium text-zinc-200">{title}</dt><dd className="mt-1 text-zinc-400">{description}</dd></div>
              ))}
            </dl>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h2 className="text-sm font-medium">Testing &amp; Validation</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Initial data checks and a manual query script are implemented. Full validation and automated backend/AI testing remain unfinished.</p>
              <a href={`${githubUrl}/blob/main/db/test_queries.py`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-white">View query-check script <LuArrowUpRight aria-hidden="true" /></a>
            </div>
            <figure className="mt-5 rounded-2xl border border-dashed border-white/15 bg-black/20 p-6 text-center">
              <LuTerminal className="mx-auto h-5 w-5 text-zinc-500" aria-hidden="true" />
              <figcaption className="mt-3 text-xs leading-6 text-zinc-400">Evidence placeholder · Real database query output coming soon.</figcaption>
            </figure>
          </div>
        </details>

        <nav aria-label="Project links" className="flex flex-wrap gap-4 border-t border-white/10 py-10">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="premium-button"><LuGithub size={16} /> View GitHub <LuArrowUpRight size={16} /></a>
          <Link href="/#portfolio" className="ghost-button">More Projects</Link>
        </nav>
      </div>
    </main>
  );
}
