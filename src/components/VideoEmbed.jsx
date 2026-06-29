export default function VideoEmbed({ url, caption }) {
  const getTikTokEmbedId = (url) => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  };

  const getInstagramEmbedUrl = (url) => {
    // Remove trailing slash if present
    const cleanUrl = url.replace(/\/$/, '');
    return `${cleanUrl}/embed`;
  };

  const isTikTok = url.includes('tiktok.com');
  const isInstagram = url.includes('instagram.com');

  if (isTikTok) {
    const videoId = getTikTokEmbedId(url);
    if (!videoId) return null;

    return (
      <div className="polaroid video-polaroid">
        <div className="video-container">
          <blockquote
            className="tiktok-embed"
            cite={url}
            data-video-id={videoId}
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                @nurturelief
              </a>
            </section>
          </blockquote>
        </div>
        {caption && <div className="cap">{caption}</div>}
      </div>
    );
  }

  if (isInstagram) {
    const embedUrl = getInstagramEmbedUrl(url);

    return (
      <div className="polaroid video-polaroid">
        <div className="video-container instagram-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Instagram post"
          />
        </div>
        {caption && <div className="cap">{caption}</div>}
      </div>
    );
  }

  return null;
}
