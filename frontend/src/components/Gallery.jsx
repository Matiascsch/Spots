function Gallery({ items }) {
  return (
    <section className="gallery">
      {items.map((item) => (
        <div key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Gallery;
