export default function ContactLoading() {
  return (
    <div className="route-loading">
      <div className="route-loading__hero">
        <div className="skeleton skeleton--heading" style={{ width: "40%", margin: "0 auto var(--space-4)" }} />
        <div className="skeleton skeleton--text" style={{ width: "50%", margin: "0 auto" }} />
      </div>
      <div className="route-loading__content route-loading__content--form">
        <div className="skeleton skeleton--text" style={{ width: "50%", height: "40px" }} />
        <div className="skeleton skeleton--text" style={{ width: "100%", height: "40px" }} />
        <div className="skeleton skeleton--text" style={{ width: "100%", height: "40px" }} />
        <div className="skeleton skeleton--card" style={{ height: "200px" }} />
      </div>
    </div>
  );
}
