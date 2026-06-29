import { useLang } from '../i18n/LanguageContext';
import { useEffect } from 'react';
import Polaroid from '../components/Polaroid';

export default function Work() {
  const { t } = useLang();

  // Load TikTok embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const works = [
    { caption: t('work_cap1'), videoUrl: 'https://www.tiktok.com/@nurturelief/video/7581713550809353486' },
    { caption: t('work_cap2'), videoUrl: 'https://www.instagram.com/reel/C_bDhjmyKUZ/' },
    { caption: t('work_cap3'), videoUrl: 'https://www.instagram.com/reel/C-iJVblN8nm/' },
    { caption: t('work_cap4'), videoUrl: 'https://www.instagram.com/reel/C6wKnq_p-1p/' },
    { caption: t('work_cap5'), videoUrl: 'https://www.instagram.com/p/DZFCboSyqWm/' },
  ];

  return (
    <section className="sec" id="work">
      <div className="wrap work-banner">
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="banner">{t('work_title')}</div>
        </div>
        <div className="polaroids reveal">
          {works.map((work, i) => (
            <Polaroid
              key={i}
              caption={work.caption}
              src={work.src}
              videoUrl={work.videoUrl}
              imageStyle={work.imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
