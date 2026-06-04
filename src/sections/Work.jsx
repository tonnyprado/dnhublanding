import { useLang } from '../i18n/LanguageContext';
import Polaroid from '../components/Polaroid';

export default function Work() {
  const { t } = useLang();

  const works = [
    { caption: t('work_cap1'), src: '/images/work-beauty.jpg' },
    { caption: t('work_cap2'), src: '/images/work-filming.jpg' },
    { caption: t('work_cap3'), src: '/images/work-instagram.jpg' },
    { caption: t('work_cap4'), src: '/images/work-packaging.jpg' },
    { caption: t('work_cap5'), src: '/herophoto.png', imageStyle: { objectPosition: 'left center' } },
  ];

  return (
    <section className="sec" id="work">
      <div className="wrap work-banner">
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="banner">{t('work_title')}</div>
        </div>
        <div className="polaroids reveal">
          {works.map((work, i) => (
            <Polaroid key={i} caption={work.caption} src={work.src} imageStyle={work.imageStyle} />
          ))}
        </div>
      </div>
    </section>
  );
}
