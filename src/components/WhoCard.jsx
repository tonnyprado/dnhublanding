export default function WhoCard({ number, title }) {
  const num = String(number).padStart(2, '0');

  return (
    <div className="who-card reveal">
      <div className="wn">{num}</div>
      <div className="wt">{title}</div>
    </div>
  );
}
