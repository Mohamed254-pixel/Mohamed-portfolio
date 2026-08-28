export default function CustomerSegmentationProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-6">
      <div className="fixed inset-0 pointer-events-none grid-background" />

      <div className="sticky top-4 z-50 max-w-6xl mx-auto">
        <nav className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between shadow-[0_14px_50px_rgba(0,0,0,0.35)]">
          <a href="/#portfolio" className="text-sm text-zinc-400 hover:text-white transition">
            ← Portfolio
          </a>

          <div className="flex items-center gap-2">
            <a href="/projects/soccer-data-pipeline" className="project-nav-button project-nav-compact" aria-label="Previous project">
              <span>←</span>
              <span className="hidden sm:inline">Previous</span>
            </a>
            <a href="/" className="project-nav-home">mohamed.dev</a>
            <a href="/projects/music-insights-agent" className="project-nav-button project-nav-compact" aria-label="Next project">
              <span className="hidden sm:inline">Next</span>
              <span>→</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <section className="pt-20 pb-20">
          <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase mb-5">Machine Learning Project</p>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Customer
            <br />
            Segmentation
          </h1>

          <p className="mt-7 max-w-2xl text-zinc-500 leading-7">A customer analytics project that uses K-Means clustering to group customers based on patterns in their data and uncover meaningful segments for business analysis.</p>

          <div className="flex flex-wrap gap-3 mt-8">
            {['Python', 'Pandas', 'K-Means', 'Analytics', 'Matplotlib'].map((item) => (
              <span key={item} className="px-3 py-2 border border-white/10 rounded-lg text-xs text-zinc-500 bg-white/[0.02]">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="info-card">
            <span className="text-zinc-600 text-xs">01</span>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Records</p>
              <p className="text-2xl font-semibold mt-1">500+</p>
            </div>
          </div>
          <div className="info-card">
            <span className="text-zinc-600 text-xs">02</span>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Clusters</p>
              <p className="text-2xl font-semibold mt-1">4</p>
            </div>
          </div>
          <div className="info-card">
            <span className="text-zinc-600 text-xs">03</span>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Method</p>
              <p className="text-2xl font-semibold mt-1">K-Means</p>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Overview</p>
            <h2 className="text-4xl font-bold">What it does</h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>The project prepares customer data in Python and uses K-Means clustering to identify groups with similar characteristics.</p>
            <p>The resulting segments make it easier to compare customer behavior and understand how different groups vary.</p>
            <p>The analysis demonstrates a practical machine-learning workflow from data preparation through clustering and interpretation.</p>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Key Features</p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Customer data preparation', 'K-Means clustering', 'Four customer segments', 'Exploratory data analysis', 'Cluster comparison', 'Data visualization'].map((feature) => (
              <div key={feature} className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
                <p className="text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Workflow</p>
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <p className="text-center text-zinc-400 leading-8">Customer Data → Python → Pandas → Data Preparation → K-Means → Cluster Analysis → Visualization</p>
          </div>
        </section>

        <section className="py-12 border-t border-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/projects/soccer-data-pipeline" className="project-switch-card group">
              <span className="text-zinc-600 transition-transform group-hover:-translate-x-1">←</span>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">Previous</p>
                <p className="mt-1 text-sm text-zinc-300">Soccer Data Pipeline</p>
              </div>
            </a>

            <a href="/projects/music-insights-agent" className="project-switch-card group">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">Next</p>
                <p className="mt-1 text-sm text-zinc-300">Music Insights Agent</p>
              </div>
              <span className="text-zinc-600 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <a href="/#portfolio" className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition">
            ← Back to all projects
          </a>
        </section>
      </div>
    </main>
  );
}
