export function PreviewBanner() {
  return (
    <div className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-accent bg-background/95 px-4 py-2 font-mono text-xs text-accent shadow-lg">
      Preview mode{" "}
      <a href="/api/draft/disable" className="underline hover:opacity-80">
        Exit preview
      </a>
    </div>
  )
}
