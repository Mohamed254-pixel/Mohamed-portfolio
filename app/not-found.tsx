import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound-page min-h-screen px-5 md:px-10 lg:px-14 flex items-center justify-center">
      <div className="fixed inset-0 pointer-events-none grid-background" />

      <section className="notfound-shell">
        <div className="notfound-code">
          <span>4</span>
          <span className="notfound-zero">0</span>
          <span>4</span>
        </div>

        <div className="notfound-grid">
          <div>
            <p className="section-kicker">Route Error</p>
            <h1>Pipeline couldn&apos;t find this page.</h1>
            <p className="notfound-copy">
              The route may have moved, the path may be wrong, or this page
              never made it through the pipeline.
            </p>

            <div className="notfound-actions">
              <Link href="/" className="premium-button">
                ← Return Home
              </Link>

              <Link href="/#portfolio" className="ghost-button">
                View Portfolio →
              </Link>
            </div>
          </div>

          <div className="notfound-terminal" aria-hidden="true">
            <p>$ GET /requested-route</p>
            <p>status: <span>404</span></p>
            <p>records_found: 0</p>
            <p>fallback: /</p>
            <div className="notfound-terminal-line" />
            <p>mohamed.dev</p>
          </div>
        </div>
      </section>
    </main>
  );
}
