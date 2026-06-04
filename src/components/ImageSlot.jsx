export default function ImageSlot({ src, alt = '', radius = 0, className = '', style = {}, placeholder = '' }) {
  const slotStyle = {
    borderRadius: radius ? `${radius}px` : undefined,
    ...style,
  };

  if (src) {
    return (
      <img
        className={`img-slot ${className}`}
        src={src}
        alt={alt}
        style={slotStyle}
      />
    );
  }

  return (
    <div className={`img-slot is-empty ${className}`} style={slotStyle}>
      {placeholder}
    </div>
  );
}
