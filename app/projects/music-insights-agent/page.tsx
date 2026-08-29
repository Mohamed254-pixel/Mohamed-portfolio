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

        <section className="pt-16 pb-20">
          <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase mb-5">
            Data + AI Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Music Insights
            <br />
            Agent
          </h1>

          <p className="mt-7 max-w-2xl text-zinc-500 leading-7">
            An end-to-end music analytics system that transforms Apple Music
            listening history into structured data and produces verified
            insights from SQL results.
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
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              01
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Source Rows
              </p>

              <p className="text-2xl font-semibold mt-1">
                278K+
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              02
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                PLAY_END
              </p>

              <p className="text-2xl font-semibold mt-1">
                172K+
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              03
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Pipeline
              </p>

              <p className="text-2xl font-semibold mt-1">
                ETL
              </p>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
              Overview
            </p>

            <h2 className="text-4xl font-bold">
              What it does
            </h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>
              The project processes large Apple Music listening-history files
              and converts raw activity into cleaner listening events.
            </p>

            <p>
              Python and Pandas handle profiling, cleaning, and transformation
              before structured data is prepared for database analysis.
            </p>

            <p>
              The long-term goal is an analytics agent that answers natural
              language questions using verified SQL results instead of guessing
              from raw data.
            </p>
          </div>
        </section>

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
                "Profile the raw files, isolate useful playback events, process the data in chunks with Python and Pandas, then prepare cleaner event records for PostgreSQL and SQL analysis.",
              ],
              [
                "Key Decisions",
                "Keep numbers ahead of narrative, use SQL-first analytics, and design the agent to rely on verified query results rather than unsupported assumptions.",
              ],
              [
                "Outcome",
                "The pipeline processed 278K+ source rows and identified 172K+ PLAY_END events, creating a structured foundation for repeatable listening analysis.",
              ],
            ].map(([title, text]) => (
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
            ))}
          </div>
        </section>

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

        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Architecture
          </p>

          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <p className="text-center text-zinc-400 leading-8">
              Apple Music Data → Python → Pandas → Cleaning → PostgreSQL → SQL
              Analytics → AI Layer
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohamed254-pixel"
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