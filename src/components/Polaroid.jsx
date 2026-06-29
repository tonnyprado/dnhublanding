import ImageSlot from './ImageSlot';
import VideoEmbed from './VideoEmbed';

export default function Polaroid({ src, videoUrl, caption, placeholder = 'Drop a photo', imageStyle = {} }) {
  // If videoUrl is provided, render video embed
  if (videoUrl) {
    return <VideoEmbed url={videoUrl} caption={caption} />;
  }

  // Otherwise render image
  return (
    <div className="polaroid">
      <ImageSlot src={src} placeholder={placeholder} style={imageStyle} />
      {caption && <div className="cap">{caption}</div>}
    </div>
  );
}
