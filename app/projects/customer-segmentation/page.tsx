const workflow = [
  { label: "Source", value: "Customer Data" },
  { label: "Processing", value: "Python" },
  { label: "Preparation", value: "Pandas" },
  { label: "Model", value: "K-Means" },
  { label: "Analysis", value: "4 Clusters" },
  { label: "Output", value: "Visualization" },
];

const clusterDots = [
  { left: "18%", top: "25%" },
  { left: "22%", top: "31%" },
  { left: "15%", top: "35%" },
  { left: "26%", top: "24%" },
  { left: "44%", top: "18%" },
  { left: "50%", top: "22%" },
  { left: "47%", top: "30%" },
  { left: "55%", top: "27%" },
  { left: "68%", top: "52%" },
  { left: "75%", top: "46%" },
  { left: "79%", top: "58%" },
  { left: "70%", top: "61%" },
  { left: "32%", top: "60%" },
  { left: "38%", top: "66%" },
  { left: "26%", top: "70%" },
  { left: "42%", top: "74%" },
];

export default function CustomerSegmentationProject() {
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
              Machine Learning Project
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Completed
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Customer
            <br />
            Segmentation
          </h1>

          <p className="mt-7 max-w-3xl text-zinc-500 leading-7">
            A customer analytics project that prepares customer data and uses
            K-Means clustering to identify interpretable groups for business
            analysis.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Python", "Pandas", "K-Means", "Analytics", "Matplotlib"].map(
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
              href="https://github.com/Mohamed254-pixel/customer-segmentation"
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
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600 mb-5">
                  Project Visual
                </p>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-6">
                  <div className="relative h-[290px] rounded-[26px] border border-white/10 bg-white/[0.02] overflow-hidden">
                    <div className="absolute left-10 right-6 bottom-10 top-6">
                      <div className="absolute left-0 right-0 bottom-0 h-px bg-white/15" />
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/15" />

                      {clusterDots.map((dot, index) => (
                        <div
                          key={index}
                          className="absolute h-3 w-3 rounded-full bg-white/75"
                          style={{
                            left: dot.left,
                            top: dot.top,
                            opacity: 0.35 + (index % 4) * 0.12,
                          }}
                        />
                      ))}
                    </div>

                    <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                        clusters
                      </p>
                      <p className="mt-2 text-lg font-semibold">4 groups</p>
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
                      data
                    </p>
                    <p className="mt-3 text-2xl font-semibold">500+</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      customer records used for clustering and analysis
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      model
                    </p>
                    <p className="mt-3 text-2xl font-semibold">K-Means</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      groups similar customer records into interpretable segments
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-700">
                      result
                    </p>
                    <p className="mt-3 text-2xl font-semibold">4 segments</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      clearer customer grouping for business analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="info-card">
            <span className="text-zinc-600 text-xs">01</span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Records
              </p>

              <p className="text-2xl font-semibold mt-1">500+</p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">02</span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Clusters
              </p>

              <p className="text-2xl font-semibold mt-1">4</p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">03</span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Method
              </p>

              <p className="text-2xl font-semibold mt-1">K-Means</p>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
              Overview
            </p>

            <h2 className="text-4xl font-bold">
              Turning customer records into meaningful groups.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>
              A flat customer dataset does not automatically reveal which
              customers share similar characteristics.
            </p>

            <p>
              Python and Pandas prepare the dataset before K-Means clustering
              groups the customer records into four segments.
            </p>

            <p>
              The resulting clusters can then be compared and visualized to
              understand how the groups differ.
            </p>
          </div>
        </section>

        {/* WORKFLOW DIAGRAM */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Workflow
          </p>

          <h2 className="text-4xl font-bold mb-10">Analysis flow</h2>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-8">
            <div className="flex flex-col md:flex-row md:items-stretch gap-3">
              {workflow.map((step, index) => (
                <div key={step.value} className="contents">
                  <div className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                      {step.label}
                    </p>

                    <p className="mt-3 text-sm font-medium text-zinc-300">
                      {step.value}
                    </p>
                  </div>

                  {index < workflow.length - 1 && (
                    <div className="flex items-center justify-center text-zinc-700 px-1">
                      <span className="hidden md:inline">→</span>
                      <span className="md:hidden py-1">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL DECISIONS */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Technical Decisions
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Prepare Before Modeling",
                "The customer data is cleaned and organized before clustering so the model operates on a more consistent dataset.",
              ],
              [
                "K-Means Clustering",
                "K-Means provides a straightforward unsupervised method for grouping customers with similar characteristics without requiring pre-labeled customer categories.",
              ],
              [
                "Four Segments",
                "The final workflow produces four customer clusters that can be compared as separate groups during analysis.",
              ],
              [
                "Visual Interpretation",
                "Matplotlib supports the interpretation step by making cluster patterns easier to inspect and communicate.",
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

        {/* CASE STUDY */}
        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">
            Case Study
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Problem",
                "A flat customer dataset does not immediately show which customers behave similarly, making it harder to compare groups and identify useful patterns.",
              ],
              [
                "Approach",
                "Clean and prepare 500+ customer records with Python and Pandas, then apply K-Means clustering to organize the data into four customer segments.",
              ],
              [
                "Key Decisions",
                "Keep the workflow understandable: prepare the data first, perform clustering on the cleaned dataset, then compare the resulting groups through analysis and visualization.",
              ],
              [
                "Outcome",
                "The project produced four customer clusters from 500+ records and a repeatable workflow for exploring how those segments differ.",
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
              "Customer data preparation",
              "Python data analysis",
              "Pandas transformations",
              "K-Means clustering",
              "Four customer segments",
              "Cluster comparison",
              "Exploratory data analysis",
              "Matplotlib visualization",
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
              Completed
            </span>

            <h2 className="text-3xl font-bold mt-6">
              Complete analytics workflow
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-500 leading-7">
              The project covers data preparation, clustering, segment
              analysis, and visualization from start to finish.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <section className="py-16 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohamed254-pixel/customer-segmentation"
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