import ImageSlot from './ImageSlot';

export default function ServiceCard({ index, badge, title, desc, items = [], color = 'c1', image, imagePlaceholder = 'Drop a photo' }) {
  const num = String(index).padStart(2, '0');

  return (
    <article className={`svc-card ${color} reveal`}>
      <div className="svc-l">
        <div className="svc-top">
          <span className="svc-badge">{badge}</span>
          <span className="svc-num">{num}</span>
        </div>
        <h3>{title}</h3>
        <p className="desc">{desc}</p>
        <ul className="svc-list">
          {items.map((item, i) => (
            <li key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="svc-r">
        <ImageSlot src={image} radius={16} placeholder={imagePlaceholder} />
      </div>
    </article>
  );
}
