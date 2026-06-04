import { useLang } from '../i18n/LanguageContext';
import Button from '../components/Button';
import TagPill from '../components/TagPill';
import ImageSlot from '../components/ImageSlot';

export default function Statement() {
  const { t } = useLang();

  return (
    <section className="sec">
      <div className="wrap statement-grid">
        <div className="reveal">
          <h2 className="big">
            {t('statement_big')} <TagPill variant="pur">UGC</TagPill> {t('statement_impossible')} <TagPill variant="blue">Influencer</TagPill> {t('statement_ignore')} <TagPill variant="yel">AI Workflows</TagPill>
          </h2>
        </div>
        <div className="statement-side reveal">
          <p>{t('statement_desc')}</p>
          <div className="statement-foot">
            <Button variant="dark" href="#services">{t('statement_cta1')}</Button>
            <Button variant="accent" href="#contact">{t('statement_cta2')}</Button>
          </div>
          <div className="statement-img">
            <ImageSlot src="/images/statement.jpg" alt="Beauty influencer" />
          </div>
        </div>
      </div>
    </section>
  );
}
