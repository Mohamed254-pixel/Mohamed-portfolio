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

        <section className="pt-16 pb-20">
          <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase mb-5">
            Machine Learning Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Customer
            <br />
            Segmentation
          </h1>

          <p className="mt-7 max-w-2xl text-zinc-500 leading-7">
            A customer analytics project that uses K-Means clustering to group
            customers based on patterns in their data and uncover meaningful
            segments for business analysis.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "Pandas",
              "K-Means",
              "Analytics",
              "Matplotlib",
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
                Records
              </p>

              <p className="text-2xl font-semibold mt-1">
                500+
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              02
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Clusters
              </p>

              <p className="text-2xl font-semibold mt-1">
                4
              </p>
            </div>
          </div>

          <div className="info-card">
            <span className="text-zinc-600 text-xs">
              03
            </span>

            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                Method
              </p>

              <p className="text-2xl font-semibold mt-1">
                K-Means
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
              The project prepares customer data in Python and uses K-Means
              clustering to identify groups with similar characteristics.
            </p>

            <p>
              The resulting segments make it easier to compare customer
              behavior and understand how different groups vary.
            </p>

            <p>
              The analysis demonstrates a practical machine-learning workflow
              from data preparation through clustering and interpretation.
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
                "A flat customer dataset does not immediately show which customers behave similarly, making it harder to compare groups and identify useful patterns.",
              ],
              [
                "Approach",
                "Clean and prepare 500+ customer records with Python and Pandas, then apply K-Means clustering to organize the data into four customer segments.",
              ],
              [
                "Key Decisions",
                "Keep the workflow simple and explainable: prepare the data first, run clustering on the cleaned dataset, then compare the resulting groups through analysis and visualization.",
              ],
              [
                "Outcome",
                "The project produced four customer clusters from 500+ records and a repeatable workflow for exploring how the segments differ.",
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
              "Customer data preparation",
              "K-Means clustering",
              "Four customer segments",
              "Exploratory data analysis",
              "Cluster comparison",
              "Data visualization",
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
            Workflow
          </p>

          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <p className="text-center text-zinc-400 leading-8">
              Customer Data → Python → Pandas → Data Preparation → K-Means →
              Cluster Analysis → Visualization
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