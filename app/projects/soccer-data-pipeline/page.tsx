export default function SoccerDataPipelineProject() {
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
            Data Engineering Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Soccer Data
            <br />
            Pipeline
          </h1>

          <p className="mt-7 max-w-2xl text-zinc-500 leading-7">
            An automated soccer data pipeline that collects Premier League
            match data from an API, transforms it with Python and Pandas, and
            stores structured records in MySQL.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "Pandas",
              "MySQL",
              "API",
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
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              01
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Matches
              </p>

              <p className="text-2xl font-semibold mt-1">
                380
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              02
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Duplicates
              </p>

              <p className="text-2xl font-semibold mt-1">
                0
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              03
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Storage
              </p>

              <p className="text-2xl font-semibold mt-1">
                MySQL
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
              The pipeline collects match data from API-Football and converts
              raw API responses into structured records.
            </p>

            <p>
              Python and Pandas handle cleaning and transformation before
              records are loaded into MySQL.
            </p>

            <p>
              UPSERT logic keeps fixture records current while avoiding
              duplicate match rows.
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
                "Live match data arrives as API responses. Repeated ingestion can create duplicate records or make it difficult to keep fixture data consistent.",
              ],
              [
                "Approach",
                "Extract Premier League match data from API-Football, transform the response with Python and Pandas, and load structured match records into MySQL.",
              ],
              [
                "Key Decisions",
                "Use fixture_id as the primary key and UPSERT logic so rerunning the pipeline updates existing fixtures instead of inserting duplicate match rows.",
              ],
              [
                "Outcome",
                "The pipeline stores 380 Premier League match records with unique fixture IDs and zero duplicate fixture rows.",
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
              "API data ingestion",
              "Premier League match processing",
              "Pandas transformations",
              "MySQL storage",
              "UPSERT logic",
              "Duplicate-safe fixture loading",
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
              API-Football → Python → Pandas → Cleaning → MySQL → Analytics
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