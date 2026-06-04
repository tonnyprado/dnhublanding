import { useLang } from '../i18n/LanguageContext';
import ImageSlot from '../components/ImageSlot';
import Badge from '../components/Badge';

export default function About() {
  const { t } = useLang();

  return (
    <section className="sec" id="about" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="about-collage reveal">
          <div className="m1">
            <ImageSlot src="/images/about-workspace.jpg" alt="Creative workspace" />
          </div>
          <div className="m2">
            <ImageSlot src="/images/about-seoul.jpg" alt="Seoul street" />
          </div>
          <div className="m3">
            <ImageSlot src="/images/about-bts.jpg" alt="Behind the scenes" />
          </div>
        </div>
        <div className="banner about-ghost">{t('about_title')}</div>
        <div className="about-block reveal">
          <div>
            <h2>{t('about_heading')}</h2>
          </div>
          <div>
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <div className="std-badges" style={{ marginTop: '24px' }}>
              <Badge gold>{t('about_badge1')}</Badge>
              <Badge>{t('about_badge2')}</Badge>
              <Badge>{t('about_badge3')}</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
