import { useLang } from '../i18n/LanguageContext';
import ImageSlot from '../components/ImageSlot';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-head reveal">
          <span className="label">{t('hero_label')} ★</span>
          <p className="lead">{t('hero_lead')}</p>
        </div>
        <div className="hero-collage reveal">
          <div className="ph a">
            <ImageSlot src="/images/image4.png" alt="Skincare flatlay" />
          </div>
          <div className="ph b">
            <ImageSlot src="/images/image1.png" alt="K-beauty product" />
          </div>
          <div className="ph c">
            <ImageSlot src="/images/image3.png" alt="Content creator" />
          </div>
        </div>
        <div className="hero-banner">
          <h1>
            {t('hero_line1')}<br />
            <span className="mk">{t('hero_line2')}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
