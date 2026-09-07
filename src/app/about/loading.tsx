export default function AboutLoading() {
  return (
    <div className="route-loading">
      <div className="route-loading__hero">
        <div className="skeleton skeleton--heading" style={{ width: "60%", margin: "0 auto var(--space-4)" }} />
        <div className="skeleton skeleton--text" style={{ width: "40%", margin: "0 auto" }} />
      </div>
      <div className="route-loading__content">
        <div className="skeleton skeleton--text" />
        <div className="skeleton skeleton--text" style={{ width: "85%" }} />
        <div className="skeleton skeleton--card" style={{ height: "200px", marginTop: "var(--space-6)" }} />
        <div className="skeleton skeleton--text" style={{ width: "70%" }} />
      </div>
    </div>
  );
}
