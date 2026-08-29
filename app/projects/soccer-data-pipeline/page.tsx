const architecture = [
  { label: "Source", value: "API-Football" },
  { label: "Ingestion", value: "Python" },
  { label: "Transform", value: "Pandas" },
  { label: "Load", value: "UPSERT" },
  { label: "Storage", value: "MySQL" },
];

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

        {/* HERO */}
        <section className="pt-16 pb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase">
              Data Engineering Project
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Production-style Project
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Soccer Data
            <br />
            Pipeline
          </h1>

          <p className="mt-7 max-w-3xl text-zinc-500 leading-7">
            An API-to-database pipeline that collects Premier League match data,
            transforms records with Python and Pandas, and loads structured
            fixture data into MySQL using duplicate-safe UPSERT logic.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Python", "Pandas", "MySQL", "API", "ETL", "UPSERT"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-2 border border-white/10 rounded-lg text-xs text-zinc-500 bg-white/[0.02]"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://github.com/Mohamed254-pixel/soccer-data-pipeline"
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
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600 mb-5">
                  Project Visual
                </p>

                <div className="rounded-3xl border border-white/10 bg-[#0b0f0b] p-5 md:p-6">
                  <div className="relative mx-auto max-w-3xl h-[280px] rounded-[28px] border border-white/10 bg-[#101610] overflow-hidden">
                    <div className="absolute inset-6 border border-white/15 rounded-[22px]" />
                    <div className="absolute left-1/2 top-6 bottom-6 w-px bg-white/15 -translate-x-1/2" />
                    <div className="absolute left-1/2 top-1/2 w-20 h-20 border border-white/15 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute left-6 right-6 top-1/2 h-px bg-white/10 -translate-y-1/2" />

                    <div className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute left-[27%] top-[42%] h-3 w-3 rounded-full bg-white/60" />
                    <div className="absolute left-[38%] top-[34%] h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute left-[62%] top-[55%] h-3 w-3 rounded-full bg-white/60" />
                    <div className="absolute left-[71%] top-[38%] h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute left-[80%] top-[48%] h-3 w-3 rounded-full bg-white/60" />

                    <svg
                      viewBox="0 0 800 300"
                      className="absolute inset-0 w-full h-full"
                    >
                      <path
                        d="M150 95 L240 135 L330 105 L500 165 L585 115 L665 145"
                        fill="none"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                      />
                    </svg>
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
                      source
                    </p>
                    <p className="mt-3 text-2xl font-semibold">API-Football</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      match data collected from an external sports API
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      load logic
                    </p>
                    <p className="mt-3 text-2xl font-semibold">UPSERT</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      updates existing fixtures instead of creating duplicates
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      outcome
                    </p>
                    <p className="mt-3 text-2xl font-semibold">380</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      Premier League match records with zero duplicate fixture
                      rows
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
            ["01", "Matches", "380"],
            ["02", "Duplicates", "0"],
            ["03", "Primary Key", "fixture_id"],
            ["04", "Storage", "MySQL"],
          ].map(([number, label, value]) => (
            <div key={label} className="info-card">
              <span className="text-zinc-600 text-xs">{number}</span>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                  {label}
                </p>

                <p className="text-xl md:text-2xl font-semibold mt-1">
                  {value}
                </p>
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
              A repeatable path from sports API to SQL database.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>
              The pipeline collects Premier League match data from API-Football
              and turns API responses into structured match records.
            </p>

            <p>
              Python handles the extraction workflow while Pandas prepares and
              transforms the records before loading.
            </p>

            <p>
              MySQL stores the resulting fixture data. A stable fixture
              identifier and UPSERT logic make the loading process
              duplicate-safe when the pipeline runs again.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Architecture
          </p>

          <h2 className="text-4xl font-bold mb-10">API to database</h2>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-8">
            <div className="flex flex-col md:flex-row md:items-stretch gap-3">
              {architecture.map((step, index) => (
                <div key={step.value} className="contents">
                  <div className="flex-1 rounded-2xl border border-white/10 bg-black/25 p-5">
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
              API-Football → Python → Pandas → UPSERT → MySQL
            </p>
          </div>
        </section>

        {/* TECHNICAL DECISIONS */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Technical Decisions
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Engineering choices behind the pipeline
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Why fixture_id is the primary key
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Each fixture comes from the API with a unique fixture
                identifier. Using fixture_id as the primary key gives each
                match one stable database identity and prevents multiple rows
                from representing the same fixture.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Why UPSERT is used
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Sports data can be collected more than once. UPSERT logic lets
                the pipeline update an existing fixture when the primary key
                already exists instead of inserting another copy.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                How duplicates are prevented
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                The fixture_id primary key provides database uniqueness while
                the loading logic checks existing fixture identities through
                UPSERT behavior. The current dataset contains 380 unique
                fixtures and zero duplicate fixture rows.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Why MySQL was chosen
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Match data is naturally structured and works well in relational
                tables. MySQL provides primary-key constraints, SQL querying,
                and a clear foundation for expanding the project into related
                teams, standings, events, and player tables.
              </p>
            </article>
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
                "Live match data arrives as API responses. Repeated ingestion can create duplicate records or make fixture data difficult to keep consistent.",
              ],
              [
                "Approach",
                "Extract Premier League match data from API-Football, transform responses with Python and Pandas, and load structured records into MySQL.",
              ],
              [
                "Key Decisions",
                "Use fixture_id as the primary key and UPSERT logic so rerunning the pipeline updates existing fixtures rather than inserting duplicate matches.",
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

                <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
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
              "API-Football data ingestion",
              "Premier League fixture processing",
              "Python and Pandas transformations",
              "Relational MySQL storage",
              "fixture_id primary key",
              "UPSERT loading logic",
              "Duplicate-safe fixture loading",
              "Repeatable ETL workflow",
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

        {/* STATUS */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Project Status
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Production-style Project
            </span>

            <h2 className="text-3xl font-bold mt-6">
              Working pipeline, reliability upgrades next
            </h2>

            <p className="mt-4 max-w-3xl text-zinc-500 leading-7">
              The core API → Python → Pandas → MySQL workflow is working. The
              next engineering phase focuses on orchestration,
              containerization, scheduled execution, logging, and stronger data
              quality checks.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <section className="py-16 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohamed254-pixel/soccer-data-pipeline"
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