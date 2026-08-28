export default function MusicInsightsProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-5 md:px-10 lg:px-14 py-6">
      <div className="fixed inset-0 pointer-events-none grid-background" />

      <div className="sticky top-4 z-50 max-w-6xl mx-auto">
        <nav className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between shadow-[0_14px_50px_rgba(0,0,0,0.35)]">
          <a href="/#portfolio" className="text-sm text-zinc-400 hover:text-white transition">
            ← Portfolio
          </a>

          <div className="flex items-center gap-2">
            <a href="/projects/customer-segmentation" className="project-nav-button project-nav-compact" aria-label="Previous project">
              <span>←</span>
              <span className="hidden sm:inline">Previous</span>
            </a>
            <a href="/" className="project-nav-home">mohamed.dev</a>
            <a href="/projects/soccer-data-pipeline" className="project-nav-button project-nav-compact" aria-label="Next project">
              <span className="hidden sm:inline">Next</span>
              <span>→</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <section className="pt-20 pb-20">
          <p className="text-xs tracking-[0.35em] text-zinc-600 uppercase mb-5">Data + AI Project</p>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95]">
            Music Insights
            <br />
            Agent
          </h1>

          <p className="mt-7 max-w-2xl text-zinc-500 leading-7">An end-to-end music analytics system that transforms Apple Music listening history into structured data and produces verified insights from SQL results.</p>

          <div className="flex flex-wrap gap-3 mt-8">
            {['Python', 'PostgreSQL', 'SQL', 'ETL', 'Pandas', 'AI'].map((item) => (
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
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Source Rows</p>
              <p className="text-2xl font-semibold mt-1">278K+</p>
            </div>
          </div>
          <div className="info-card">
            <span className="text-zinc-600 text-xs">02</span>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">PLAY_END</p>
              <p className="text-2xl font-semibold mt-1">172K+</p>
            </div>
          </div>
          <div className="info-card">
            <span className="text-zinc-600 text-xs">03</span>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Pipeline</p>
              <p className="text-2xl font-semibold mt-1">ETL</p>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Overview</p>
            <h2 className="text-4xl font-bold">What it does</h2>
          </div>

          <div className="space-y-5 text-zinc-500 leading-7">
            <p>The project processes large Apple Music listening-history files and converts raw activity into cleaner listening events.</p>
            <p>The pipeline uses Python and Pandas for profiling, cleaning, and transformation before structured data is prepared for database analysis.</p>
            <p>The long-term goal is an analytics agent that answers natural language questions using verified SQL results instead of guessing from raw data.</p>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Key Features</p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Large-scale Apple Music data processing', 'Chunked ETL pipeline', 'Listening event cleaning', 'Playback behavior analysis', 'PostgreSQL-ready structured data', 'Verified SQL-first analytics design'].map((feature) => (
              <div key={feature} className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
                <p className="text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-5">Architecture</p>
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <p className="text-center text-zinc-400 leading-8">Apple Music Data → Python → Pandas → Cleaning → PostgreSQL → SQL Analytics → AI Layer</p>
          </div>
        </section>

        <section className="py-12 border-t border-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/projects/customer-segmentation" className="project-switch-card group">
              <span className="text-zinc-600 transition-transform group-hover:-translate-x-1">←</span>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">Previous</p>
                <p className="mt-1 text-sm text-zinc-300">Customer Segmentation</p>
              </div>
            </a>

            <a href="/projects/soccer-data-pipeline" className="project-switch-card group">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">Next</p>
                <p className="mt-1 text-sm text-zinc-300">Soccer Data Pipeline</p>
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
