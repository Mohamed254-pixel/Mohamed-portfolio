const architecture = [
  {
    label: "Source",
    value: "Apple Music CSV",
  },
  {
    label: "Processing",
    value: "Python",
  },
  {
    label: "Transform",
    value: "Pandas",
  },
  {
    label: "Storage",
    value: "PostgreSQL",
  },
  {
    label: "Analytics",
    value: "SQL",
  },
  {
    label: "In Progress",
    value: "Analytics Agent",
  },
];

export default function MusicInsightsProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-8">
      <div className="fixed inset-0 pointer-events-none grid-background" />

      <div className="relative max-w-6xl mx-auto">
        <a
          href="/#portfolio"
          className="text-sm text-zinc-500 hover:text-white transition"
        >
          ← Back to Portfolio
        </a>

        {/* HERO */}
        <section className="pt-16 pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase">
              Featured Data + AI
              Project
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
            An end-to-end music
            analytics system that
            transforms Apple Music
            listening history into
            structured data and builds
            toward an analytics agent
            that answers questions from
            verified SQL results.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "PostgreSQL",
              "SQL",
              "ETL",
              "Pandas",
              "AI",
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

            <a
              href="https://github.com/Mohamed254-pixel/music-insights-agent"
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 px-5 py-3 rounded-lg text-sm text-zinc-400 hover:text-white"
            >
              View Repository ↗
            </a>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid md:grid-cols-4 gap-4 mb-20">
          {[
            [
              "01",
              "Source Rows",
              "278K+",
            ],
            [
              "02",
              "PLAY_END Events",
              "172K+",
            ],
            [
              "03",
              "Pipeline",
              "ETL",
            ],
            [
              "04",
              "Analytics",
              "SQL",
            ],
          ].map(
            ([
              number,
              label,
              value,
            ]) => (
              <div
                key={label}
                className="info-card"
              >
                <span className="text-zinc-600 text-xs">
                  {number}
                </span>

                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                    {label}
                  </p>

                  <p className="text-2xl font-semibold mt-1">
                    {value}
                  </p>
                </div>
              </div>
            )
          )}
        </section>

        {/* OVERVIEW */}
        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
              Overview
            </p>

            <h2 className="text-4xl font-bold">
              From raw listening
              history to structured
              analytics.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>
              Apple Music exports can
              contain hundreds of
              thousands of activity
              records and many sparse
              or inconsistent fields.
            </p>

            <p>
              Python and Pandas are used
              to profile, clean, filter,
              and transform the raw
              listening data into more
              useful playback events.
            </p>

            <p>
              The structured output is
              designed for PostgreSQL
              and SQL-based analysis.
              The next layer is an
              analytics agent that uses
              verified query results
              instead of inventing
              answers from raw data.
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

              <h2 className="text-4xl font-bold">
                Data flow
              </h2>
            </div>

            <p className="max-w-lg text-sm text-zinc-600 leading-6">
              The agent is shown as the
              final layer because it is
              the part currently being
              developed.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-8">
            <div className="flex flex-col md:flex-row md:items-stretch gap-3">
              {architecture.map(
                (step, index) => (
                  <div
                    key={step.value}
                    className="contents"
                  >
                    <div className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-black/25 p-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                        {step.label}
                      </p>

                      <p className="mt-3 text-sm font-medium text-zinc-300">
                        {step.value}
                      </p>
                    </div>

                    {index <
                      architecture.length -
                        1 && (
                      <div className="flex items-center justify-center text-zinc-700 px-1">
                        <span className="hidden md:inline">
                          →
                        </span>

                        <span className="md:hidden py-1">
                          ↓
                        </span>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5">
            <p className="text-xs text-zinc-600 leading-6">
              Apple Music CSV → Python
              → Pandas → PostgreSQL →
              SQL → Analytics Agent
            </p>
          </div>
        </section>

        {/* TECHNICAL DECISIONS */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Technical Decisions
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Why the pipeline is
            designed this way
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Chunked Processing",
                "The source export contains hundreds of thousands of rows, so the ETL workflow processes the listening data in chunks instead of treating the full export as a small file.",
              ],
              [
                "PLAY_END Focus",
                "Playback events are separated by event type so analysis can focus on records that are meaningful for listening behavior instead of mixing every raw activity event together.",
              ],
              [
                "SQL Before Narrative",
                "Analytics are designed around structured SQL results first. Numbers are calculated from the data before any natural-language explanation is produced.",
              ],
              [
                "Read-only Agent Boundary",
                "The analytics agent is being designed as a read-only layer that answers from verified database results instead of changing the underlying data.",
              ],
            ].map(
              ([title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {title}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {text}
                  </p>
                </article>
              )
            )}
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
                "Apple Music exports contain hundreds of thousands of activity rows, sparse fields, and multiple playback event types. Raw history is difficult to analyze reliably as-is.",
              ],
              [
                "Approach",
                "Profile the raw files, isolate useful playback events, process the data with Python and Pandas, and prepare cleaner event records for PostgreSQL and SQL analysis.",
              ],
              [
                "Key Decisions",
                "Keep numbers ahead of narrative, use SQL-first analytics, and design the agent to rely on verified query results rather than unsupported assumptions.",
              ],
              [
                "Outcome",
                "The pipeline processed 278K+ source rows and identified 172K+ PLAY_END events, creating a structured foundation for repeatable listening analysis.",
              ],
            ].map(
              ([title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {title}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {text}
                  </p>
                </article>
              )
            )}
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
              "Chunked ETL pipeline",
              "Listening event cleaning",
              "Playback behavior analysis",
              "PostgreSQL-ready structured data",
              "Verified SQL-first analytics design",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
              >
                <p className="text-zinc-400">
                  {feature}
                </p>
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

              Active Development
            </span>

            <h2 className="text-3xl font-bold mt-6">
              Verified Analytics Agent
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-500 leading-7">
              The next phase connects
              the structured analytics
              layer to a controlled
              natural-language
              interface while keeping
              SQL results as the source
              of truth.
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

            <a
              href="/#portfolio"
              className="border border-white/10 px-5 py-3 rounded-lg text-sm text-zinc-400 hover:text-white"
            >
              More Projects
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}