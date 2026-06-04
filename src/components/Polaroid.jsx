import ImageSlot from './ImageSlot';

export default function Polaroid({ src, caption, placeholder = 'Drop a photo', imageStyle = {} }) {
  return (
    <div className="polaroid">
      <ImageSlot src={src} placeholder={placeholder} style={imageStyle} />
      {caption && <div className="cap">{caption}</div>}
    </div>
  );
}
