import Link from "next/link";

const architecture = [
  {
    label: "Source",
    value: "API-Football",
  },
  {
    label: "Orchestration",
    value: "Apache Airflow",
  },
  {
    label: "Processing",
    value: "Python + Pandas",
  },
  {
    label: "Runtime",
    value: "Docker",
  },
  {
    label: "Storage",
    value: "MySQL",
  },
];

const airflowTasks = [
  {
    number: "01",
    name: "Extract Matches",
    description:
      "Pulls 380 Premier League matches from API-Football and saves the cleaned match data.",
  },
  {
    number: "02",
    name: "Extract Teams and Venues",
    description:
      "Pulls 20 Premier League teams and 20 venues from API-Football.",
  },
  {
    number: "03",
    name: "Load Teams and Venues",
    description:
      "Validates and loads the team and venue records into relational MySQL tables.",
  },
  {
    number: "04",
    name: "Load Matches",
    description:
      "Loads the 380 match records into MySQL using primary keys and UPSERT logic.",
  },
];

export default function SoccerDataPipelineProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-5 py-8 md:px-10 lg:px-14">
      <div className="pointer-events-none fixed inset-0 grid-background" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/#portfolio"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        {/* HERO */}
        <section className="pb-14 pt-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
              Data Engineering Project
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Working Pipeline
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Soccer Data
            <br />
            Pipeline
          </h1>

          <p className="mt-7 max-w-3xl leading-7 text-zinc-500">
            A Dockerized data engineering pipeline that uses Apache
            Airflow to extract Premier League match, team, and venue data
            from API-Football, transform the records with Python and
            Pandas, and load them into MySQL using duplicate-safe UPSERT
            logic.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Pandas",
              "MySQL",
              "Docker",
              "Apache Airflow",
              "API-Football",
              "ETL",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-500"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Mohamed254-pixel/soccer-data-pipeline"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black"
            >
              View Source Code ↗
            </a>
          </div>
        </section>

        {/* PROJECT VISUAL */}
        <section className="pb-20">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                  Pipeline Flow
                </p>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="space-y-4">
                    {architecture.map((step, index) => (
                      <div key={step.label}>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                          <div>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                              {step.label}
                            </p>

                            <p className="mt-2 text-sm font-medium text-zinc-300">
                              {step.value}
                            </p>
                          </div>

                          <span className="text-xs text-zinc-700">
                            0{index + 1}
                          </span>
                        </div>

                        {index < architecture.length - 1 && (
                          <div className="py-2 text-center text-zinc-700">
                            ↓
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                  Verified Results
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      Matches
                    </p>

                    <p className="mt-3 text-3xl font-semibold">380</p>

                    <p className="mt-2 text-sm text-zinc-500">
                      Premier League match records
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      Teams and Venues
                    </p>

                    <p className="mt-3 text-3xl font-semibold">20 + 20</p>

                    <p className="mt-2 text-sm text-zinc-500">
                      Relational team and venue records
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      Orchestration
                    </p>

                    <p className="mt-3 text-3xl font-semibold">4 tasks</p>

                    <p className="mt-2 text-sm text-zinc-500">
                      Ordered Airflow ETL workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-20 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Matches", "380"],
            ["02", "Teams", "20"],
            ["03", "Venues", "20"],
            ["04", "Airflow Tasks", "4"],
          ].map(([number, label, value]) => (
            <div key={label} className="info-card">
              <span className="text-xs text-zinc-600">{number}</span>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {label}
                </p>

                <p className="mt-1 text-xl font-semibold md:text-2xl">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* OVERVIEW */}
        <section className="grid gap-12 border-t border-white/10 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
              Overview
            </p>

            <h2 className="text-4xl font-bold">
              A Dockerized and repeatable sports data pipeline.
            </h2>
          </div>

          <div className="space-y-5 leading-7 text-zinc-500">
            <p>
              The pipeline collects Premier League match, team, and venue
              data from API-Football and transforms the API responses into
              structured records.
            </p>

            <p>
              Apache Airflow runs the workflow as four ordered tasks with
              dependencies, retries, logs, and failure tracking.
            </p>

            <p>
              Docker provides a consistent runtime and shared storage
              between tasks. MySQL stores the final records using primary
              keys and duplicate-safe UPSERT logic.
            </p>
          </div>
        </section>

        {/* AIRFLOW TASKS */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Apache Airflow DAG
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            Four ordered ETL tasks
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {airflowTasks.map((task) => (
              <article
                key={task.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Task {task.number}
                  </p>

                  <span className="h-2 w-2 rounded-full bg-zinc-500" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {task.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {task.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL DECISIONS */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Technical Decisions
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            Engineering choices behind the pipeline
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Why Apache Airflow was added",
                "Airflow separates the pipeline into individual tasks with dependencies, retries, logs, and failure tracking. A failed task can be identified and rerun without restarting the entire workflow.",
              ],
              [
                "Why Docker was added",
                "Docker provides a consistent environment for Apache Airflow and the pipeline dependencies, making the setup easier to reproduce.",
              ],
              [
                "Why shared Docker storage is used",
                "A named Docker volume allows each Airflow task to access the same CSV files. This fixed the missing-file problem between extraction and loading tasks.",
              ],
              [
                "Why fixture_id is the primary key",
                "API-Football gives each match a unique fixture ID. Using it as the primary key gives every match one stable identity in MySQL.",
              ],
              [
                "Why UPSERT is used",
                "UPSERT logic updates existing records instead of inserting duplicate matches when the pipeline runs again.",
              ],
              [
                "Why MySQL was chosen",
                "The match, team, and venue data fits a relational structure. MySQL provides primary keys, foreign keys, indexes, and SQL querying.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
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

        {/* CASE STUDY */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Case Study
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Problem",
                "The original pipeline ran as one script, which made individual failures harder to track and rerun.",
              ],
              [
                "Approach",
                "Dockerize the project and split the ETL workflow into four ordered Apache Airflow tasks for extraction and MySQL loading.",
              ],
              [
                "Key Decisions",
                "Use task dependencies, retries, logs, shared Docker storage, primary keys, and UPSERT logic to make repeated runs more reliable.",
              ],
              [
                "Outcome",
                "The complete Airflow DAG ran successfully and loaded 380 matches, 20 teams, and 20 venues into MySQL without duplicate records.",
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

        {/* KEY FEATURES */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Key Features
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Dockerized ETL environment",
              "Apache Airflow orchestration",
              "Four ordered ETL tasks",
              "Task dependencies and retries",
              "Task logs and failure tracking",
              "Shared Docker data volume",
              "380 matches, 20 teams, and 20 venues",
              "MySQL primary keys and UPSERT loading",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT STATUS */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Project Status
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Upgrade Completed
            </span>

            <h2 className="mt-6 text-3xl font-bold">
              Docker and Airflow pipeline completed
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
              The full four-task Airflow DAG ran successfully inside
              Docker and loaded 380 matches, 20 teams, and 20 venues into
              MySQL. The pipeline includes dependencies, retries, logs,
              failure tracking, shared storage, validation, and
              duplicate-safe loading.
            </p>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="border-t border-white/10 py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            Next Steps
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-3xl font-bold">
              Documentation and monitoring
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
              The next phase is updating the README with Docker and
              Airflow setup instructions, adding an Airflow screenshot,
              enabling automatic scheduling, adding a separate
              data-quality task, and building a reporting dashboard.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <section className="border-t border-white/10 py-16">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohamed254-pixel/soccer-data-pipeline"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black"
            >
              View GitHub ↗
            </a>

            <Link
              href="/#portfolio"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm text-zinc-400 hover:text-white"
            >
              More Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}