import "./ItemSection.css";

function itemSection({ title, content, src }) {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={src} alt="Feature Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}

export default itemSection;
