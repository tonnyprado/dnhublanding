import ImageSlot from './ImageSlot';

export default function TeamCard({ image, role, name, bio, placeholder = "Drop a photo" }) {
  return (
    <article className="team-card reveal">
      <ImageSlot src={image} placeholder={placeholder} />
      <div className="team-meta">
        <span className="role">{role}</span>
        <div className="nm">{name}</div>
        <p className="bio">{bio}</p>
      </div>
    </article>
  );
}
