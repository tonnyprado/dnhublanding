import { useLang } from '../i18n/LanguageContext';
import TagPill from '../components/TagPill';
import ImageSlot from '../components/ImageSlot';
import Button from '../components/Button';

export default function Marnee() {
  const { t } = useLang();

  const tags = [
    t('marnee_tag1'),
    t('marnee_tag2'),
    t('marnee_tag3'),
    t('marnee_tag4'),
    t('marnee_tag5'),
    t('marnee_tag6'),
  ];

  return (
    <section className="dark-sec sec" id="marnee">
      <div className="wrap">
        <div className="marnee-grid">
          <div className="reveal">
            <img
              className="marnee-mascot"
              src="/mascot/marnee-megaphone.png"
              alt="Marnee mascot"
            />
            <h2>
              {t('marnee_title1')} <span className="hl">{t('marnee_speed')}</span>
              <br />
              {t('marnee_title2')}
            </h2>
            <p>
              <strong style={{ color: 'var(--cream)' }}>
                {t('marnee_p1')}
              </strong>
            </p>
            <p>{t('marnee_p2')}</p>
            <div className="tags">
              {tags.map((tag, i) => (
                <TagPill key={i}>{tag}</TagPill>
              ))}
            </div>
          </div>
          <div className="marnee-shot reveal">
            <ImageSlot src="/images/marnee-screenshot.png" alt="Marnee dashboard" radius={16} />
            <p style={{ marginTop: '16px', color: 'var(--cream)', opacity: 0.8 }}>
              If you wanna know more about this software, you can click on this button
            </p>
            <Button variant="accent" href="https://www.marnee-ia.com" target="_blank" rel="noopener noreferrer">
              Visit Marnee
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
