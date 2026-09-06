export default function Loading() {
  return (
    <div className="loading-page" role="status" aria-label="Loading">
      <div className="loading-spinner" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
