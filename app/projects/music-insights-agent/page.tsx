import Link from "next/link";

const architecture = [
  { label: "Source", value: "Apple Music Export" },
  { label: "Transform", value: "Python + Pandas" },
  { label: "Format", value: "Parquet" },
  { label: "Database", value: "Docker + PostgreSQL" },
  { label: "Analytics", value: "4 SQL Views" },
  { label: "Next", value: "Analytics Agent" },
];

export default function MusicInsightsProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-8">
      <div className="fixed inset-0 pointer-events-none grid-background" />

      <div className="relative max-w-6xl mx-auto">
        <Link
          href="/#portfolio"
          className="text-sm text-zinc-500 hover:text-white transition"
        >
          ← Back to Portfolio
        </Link>

        {/* HERO */}
        <section className="pt-16 pb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase">
              Featured Data Engineering + AI Project
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Active Development
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Music Insights
            <br />
            Agent
          </h1>

          <p className="mt-7 max-w-3xl text-zinc-500 leading-7">
            An end-to-end analytics pipeline that transforms 278,231 Apple Music
            activity records into cleaned Parquet data, loads 172,899 unique
            events into Dockerized PostgreSQL, and exposes verified metrics
            through reusable SQL views.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "Pandas",
              "PostgreSQL",
              "Docker",
              "SQL",
              "ETL",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 border border-white/10 rounded-lg text-xs text-zinc-500 bg-white/[0.02]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://github.com/Mohamed254-pixel/music-insights-agent"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-5 py-3 rounded-lg text-sm font-medium"
            >
              View Source Code ↗
            </a>
          </div>
        </section>

        {/* VISUAL BANNER */}
        <section className="pb-20">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600 mb-5">
                  Project Visual
                </p>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-6">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 h-24 flex flex-col justify-between">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                        source
                      </span>
                      <span className="text-sm text-zinc-300">
                        Apple Music Export
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 h-24 flex flex-col justify-between">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                        database
                      </span>
                      <span className="text-sm text-zinc-300">
                        Docker PostgreSQL
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 h-24 flex flex-col justify-between">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                        output
                      </span>
                      <span className="text-sm text-zinc-300">
                        Analytics Views
                      </span>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-end gap-2 h-40">
                      {[
                        22, 40, 30, 58, 72, 44, 66, 80, 51, 68, 94, 70, 84,
                        62,
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-xl bg-white/70"
                          style={{
                            height: `${height}%`,
                            opacity: 0.15 + index * 0.03,
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between mt-4 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                      <span>playback activity</span>
                      <span>listening patterns</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600 mb-5">
                  What this shows
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      scale
                    </p>
                    <p className="mt-3 text-2xl font-semibold">278,231</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      raw Apple Music activity records processed
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      database
                    </p>
                    <p className="mt-3 text-2xl font-semibold">172,899</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      unique playback events loaded into PostgreSQL
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      analytics
                    </p>
                    <p className="mt-3 text-2xl font-semibold">4 SQL Views</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      reusable views for monthly, track, device, and valid-event
                      analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid md:grid-cols-4 gap-4 mb-20">
          {[
            ["01", "Source Rows", "278K+"],
            ["02", "Database Events", "172,899"],
            ["03", "Listening Events", "160,417"],
            ["04", "Analytics Views", "4"],
          ].map(([number, label, value]) => (
            <div key={label} className="info-card">
              <span className="text-zinc-600 text-xs">{number}</span>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                  {label}
                </p>

                <p className="text-2xl font-semibold mt-1">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* OVERVIEW */}
        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
              Overview
            </p>

            <h2 className="text-4xl font-bold">
              From raw listening history to repeatable SQL analytics.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>
              Apple Music exports contain hundreds of thousands of records,
              multiple event types, sparse fields, and inconsistent duration
              values.
            </p>

            <p>
              Python and Pandas profile, clean, validate, and transform the raw
              export. The cleaned dataset is stored as Parquet before being
              loaded into PostgreSQL.
            </p>

            <p>
              PostgreSQL runs inside Docker. The loader copies records into a
              staging table, validates the results, prevents duplicate event
              IDs, and records each completed ETL run.
            </p>

            <p>
              Four reusable SQL views provide verified monthly, track, device,
              and valid-listening metrics. These views will become the source of
              truth for the planned dashboard and read-only analytics agent.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
                Architecture
              </p>

              <h2 className="text-4xl font-bold">Data flow</h2>
            </div>

            <p className="max-w-lg text-sm text-zinc-600 leading-6">
              The ETL, database, and SQL analytics layers are complete. The
              read-only agent is the next development phase.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-8">
            <div className="flex flex-col md:flex-row md:items-stretch gap-3">
              {architecture.map((step, index) => (
                <div key={step.value} className="contents">
                  <div className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                      {step.label}
                    </p>

                    <p className="mt-3 text-sm font-medium text-zinc-300">
                      {step.value}
                    </p>
                  </div>

                  {index < architecture.length - 1 && (
                    <div className="flex items-center justify-center text-zinc-700 px-1">
                      <span className="hidden md:inline">→</span>
                      <span className="md:hidden py-1">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5">
            <p className="text-xs text-zinc-600 leading-6">
              Apple Music Export → Python and Pandas → Parquet → Dockerized
              PostgreSQL → SQL Analytics Views → Read-only Analytics Agent
            </p>
          </div>
        </section>

        {/* TECHNICAL DECISIONS */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Technical Decisions
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Why the pipeline is designed this way
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Chunked Processing",
                "The source export contains 278,231 rows, so the ETL pipeline processes data in chunks instead of assuming the complete file will always fit comfortably in memory.",
              ],
              [
                "Staging and Bulk Copy",
                "The PostgreSQL loader copies data into a temporary staging table first. It verifies the row count before changing the permanent listening-events table.",
              ],
              [
                "Duplicate-safe Loading",
                "Event IDs identify unique records. Running the loader again inserts no duplicate rows, which makes the pipeline safe to rerun.",
              ],
              [
                "SQL Before Narrative",
                "Analytics are calculated through tested SQL views before any natural-language explanation is produced. Every future agent response must be supported by query results.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {title}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Case Study
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Problem",
                "Apple Music exports contain hundreds of thousands of activity rows, sparse fields, inconsistent durations, and multiple playback event types. The raw files are difficult to analyze reliably.",
              ],
              [
                "Approach",
                "Profile and clean the export with Python and Pandas, store the transformed dataset as Parquet, and bulk-load validated records into a Dockerized PostgreSQL database.",
              ],
              [
                "Key Decisions",
                "Use stable event IDs, validate data before loading, keep an ETL audit history, and expose analytics through reusable SQL views instead of repeatedly querying raw records.",
              ],
              [
                "Outcome",
                "The pipeline loaded 172,899 unique events. A second run inserted zero duplicates, and four analytics views now provide repeatable listening metrics.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {title}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* DATA QUALITY */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Data Quality
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Validation before analytics
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              [
                "95.03%",
                "164,311 records have valid listening-duration values.",
              ],
              [
                "3.45%",
                "5,972 records have missing timestamps or negative original durations.",
              ],
              [
                "1.51%",
                "2,616 records report listening durations longer than the media duration.",
              ],
            ].map(([value, description]) => (
              <article
                key={value}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Key Features
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Large-scale Apple Music data processing",
              "Cleaned Parquet analytics dataset",
              "Dockerized PostgreSQL 17 database",
              "Staging-table bulk loading",
              "Duplicate-safe event upserts",
              "ETL run audit tracking",
              "Reusable data-quality checks",
              "Four SQL analytics views",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
              >
                <p className="text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEXT */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Current Development
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Next Phase
            </span>

            <h2 className="text-3xl font-bold mt-6">
              Dashboard and Verified Analytics Agent
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-500 leading-7">
              The next phase adds a Power BI dashboard and a controlled,
              read-only agent. The agent will call approved query tools and
              answer questions using verified results from the analytics views.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <section className="py-16 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohamed254-pixel/music-insights-agent"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-5 py-3 rounded-lg text-sm font-medium"
            >
              View GitHub ↗
            </a>

            <Link
              href="/#portfolio"
              className="border border-white/10 px-5 py-3 rounded-lg text-sm text-zinc-400 hover:text-white"
            >
              More Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}