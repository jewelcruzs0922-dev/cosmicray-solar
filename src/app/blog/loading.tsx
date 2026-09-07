export default function BlogLoading() {
  return (
    <div className="route-loading">
      <div className="route-loading__hero">
        <div className="skeleton skeleton--heading" style={{ width: "70%", margin: "0 auto var(--space-4)" }} />
        <div className="skeleton skeleton--text" style={{ width: "50%", margin: "0 auto" }} />
      </div>
      <div className="route-loading__content">
        <div className="skeleton skeleton--text" />
        <div className="skeleton skeleton--text" style={{ width: "80%" }} />
        <div className="skeleton skeleton--card" style={{ height: "300px", marginTop: "var(--space-6)" }} />
        <div className="skeleton skeleton--text" style={{ width: "60%" }} />
        <div className="skeleton skeleton--text" />
      </div>
    </div>
  );
}
