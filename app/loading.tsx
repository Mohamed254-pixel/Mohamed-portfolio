export default function Loading() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white flex items-center justify-center px-6">
      <div className="loading-shell" aria-live="polite" aria-label="Loading portfolio">
        <div className="loading-mark">
          <span>MI</span>
        </div>
        <div className="loading-copy">
          <p>mohamed.dev</p>
          <span>loading portfolio</span>
        </div>
        <div className="loading-track">
          <span />
        </div>
      </div>
    </main>
  );
}
