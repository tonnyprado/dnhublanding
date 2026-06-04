export default function Ribbon({ items = [], tilt = false, dark = false, reverse = false, style = {} }) {
  const row = [...items, ...items];
  const classes = [
    'ribbon',
    tilt && 'tilt',
    dark && 'dark',
    reverse && 'rev',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      <div className="ribbon-track">
        {row.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
