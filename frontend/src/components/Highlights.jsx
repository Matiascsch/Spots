function Highlights({ items }) {
  return (
    <div className="highlights">
      {items.map((item) => (
        <div key={item.label}>
          <p className="metric">{item.metric}</p>
          <p className="metric-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
