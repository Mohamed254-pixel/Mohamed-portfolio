import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Agentic AI Customer Service Assistant",
  description:
    "An in-development customer service assistant with a Python data pipeline, DuckDB database, and SQL order-history lookups. AI routing and the application are upcoming.",
  alternates: { canonical: "/projects/agentic-ai-customer-service" },
};

const githubUrl =
  "https://github.com/Mohamed254-pixel/Agentic-AI-customer-service";

const architecture = [
  {
    label: "Source",
    title: "Instacart CSV data",
    description: "Historical orders, purchased products, and product reference data.",
  },
  {
    label: "Pipeline",
    title: "Python + DuckDB",
    description:
      "Select a development sample of orders and their related line items and products; copy aisle and department reference tables.",
  },
  {
    label: "Storage",
    title: "Persistent DuckDB database",
    description:
      "Load CSV files into six relational tables for repeatable local SQL queries.",
  },
  {
    label: "Lookup functions",
    title: "Customer orders + order products",
    description:
      "Read-only database connections and parameterized lookups return structured Python records.",
  },
];

const completed = [
  {
    title: "Python data pipeline",
    file: "scripts/create_sample.py",
    description:
      "Builds a development sample from prior and training orders, selects the matching order items and products, and copies the small reference tables. Separate scripts inspect CSV row counts, ID uniqueness, and initial missing values.",
  },
  {
    title: "Persistent database",
    file: "scripts/build_db.py",
    description:
      "Loads orders, prior and training order items, products, aisles, and departments into DuckDB. The loader supports sample or full CSV inputs; the existing local database contains the development sample.",
  },
  {
    title: "Customer order history",
    file: "get_customer_orders(user_id)",
    description:
      "Retrieves a customer's historical orders, sorted by order number from newest to oldest. The function opens DuckDB in read-only mode, binds the customer ID as a query parameter, and returns a list of dictionaries.",
  },
  {
    title: "Products in an order",
    file: "get_order_products(order_id)",
    description:
      "Checks whether an order belongs to the prior or training split, joins its line items with product names, and returns items in add-to-cart order. Unknown orders and unsupported splits return an empty list.",
  },
];

const upcoming = [
  [
    "Agent routing",
    "Use LangGraph to route requests to order-history, product-recommendation, or customer-support agents.",
  ],
  [
    "AI agents and model integration",
    "Connect specialized agents to the OpenAI API and the existing data functions. Recommendation and support responses remain planned functionality.",
  ],
  [
    "Conversation memory",
    "Add MemorySaver to maintain conversation context across multiple turns.",
  ],
  [
    "Customer service application",
    "Implement the application flow and test conversations and agent responses. The application entry point and agent modules are currently placeholders.",
  ],
];

export default function AgenticCustomerServiceProject() {
  return (
    <main className="site-enter min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-8">
      <div className="fixed inset-0 pointer-events-none grid-background" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <Link href="/#portfolio" className="text-sm text-zinc-400 hover:text-white transition">
          ← Back to Portfolio
        </Link>

        <section className="pt-16 pb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-xs tracking-[0.25em] text-zinc-400 uppercase">
              AI · Software · Data Engineering
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              In Development
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02]">
            Agentic AI
            <br />
            Customer Service Assistant
          </h1>
          <p className="mt-7 max-w-3xl text-sm md:text-base text-zinc-400 leading-7">
            Building a customer service assistant on top of historical Instacart
            purchasing data. The completed foundation includes a Python data
            pipeline, a persistent DuckDB sample database, and SQL functions for
            retrieving customer orders and purchased products. AI routing and the
            customer-facing application are upcoming.
          </p>
          <p className="mt-4 text-xs leading-6 text-zinc-500">
            A four-member group project for BUS4 118S at San José State University.
          </p>

          <div className="flex flex-wrap gap-3 mt-8" aria-label="Implemented technology stack">
            {["Python", "DuckDB", "SQL", "Pandas"].map((item) => (
              <span key={item} className="skill-pill">{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="premium-button">
              <LuGithub size={16} /> View Source Code <LuArrowUpRight size={16} />
            </a>
            <a href="#progress" className="ghost-button">Current Progress ↓</a>
          </div>
        </section>

        <section className="mb-16 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 md:p-10" aria-labelledby="foundation-title">
          <p className="section-kicker">Implemented Foundation</p>
          <h2 id="foundation-title" className="mt-5 text-2xl md:text-4xl font-bold tracking-[-0.03em]">
            Historical data → queryable customer orders.
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mt-8">
            {[
              ["10,000", "orders in the local development sample"],
              ["6", "tables in the DuckDB sample database"],
              ["2", "SQL-backed customer-order lookup functions"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 py-16 lg:grid-cols-2" aria-labelledby="overview-title">
          <div>
            <p className="section-kicker">Project Overview</p>
            <h2 id="overview-title" className="mt-5 text-3xl md:text-4xl font-bold tracking-[-0.03em]">
              A data foundation for customer service tools.
            </h2>
          </div>
          <div className="space-y-5 text-sm md:text-base leading-7 text-zinc-400">
            <p>
              The project brings data preparation, relational storage, and
              application-level lookups together before introducing AI agents.
              The current functions retrieve stored order history and product
              details directly from DuckDB; they do not generate AI responses.
            </p>
            <p>
              The source is the anonymized Instacart Market Basket Analysis
              dataset. It contains historical purchases, with no live delivery
              tracking, prices, or refund records. Planned customer-support
              responses will use a clearly identified simulated policy.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-16" aria-labelledby="architecture-title">
          <p className="section-kicker">Architecture</p>
          <h2 id="architecture-title" className="mt-5 text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            From CSV files to structured lookup results.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
            The implemented flow below prepares and queries historical data.
            Agent orchestration will build on this foundation in a later phase.
          </p>
          <ol className="grid gap-4 md:grid-cols-2 mt-8">
            {architecture.map((step, index) => (
              <li key={step.label} className="project-card p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  0{index + 1} · {step.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Upcoming AI Layer</p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Customer question → LangGraph router → specialized agent → response
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Planned stack: LangGraph, OpenAI API, and MemorySaver. These
              dependencies are listed in the repository; the agent flow is not yet implemented.
            </p>
          </div>
        </section>

        <section id="progress" className="scroll-mt-8 border-t border-white/10 py-16" aria-labelledby="progress-title">
          <p className="section-kicker">Current Progress</p>
          <h2 id="progress-title" className="mt-5 text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Completed data work. AI application in development.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-8">
            {completed.map((item) => (
              <article key={item.title} className="project-card p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Completed</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <code className="mt-3 block break-words text-xs text-zinc-400">{item.file}</code>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16" aria-labelledby="upcoming-title">
          <p className="section-kicker">Upcoming Features</p>
          <h2 id="upcoming-title" className="mt-5 text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Connecting the data layer to AI agents.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-8">
            {upcoming.map(([title, description]) => (
              <article key={title} className="rounded-[22px] border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Planned · Not Yet Implemented</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <nav aria-label="Project links" className="flex flex-wrap gap-4 border-t border-white/10 py-12">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="premium-button">
            <LuGithub size={16} /> View GitHub <LuArrowUpRight size={16} />
          </a>
          <Link href="/#portfolio" className="ghost-button">More Projects</Link>
        </nav>
      </div>
    </main>
  );
}
