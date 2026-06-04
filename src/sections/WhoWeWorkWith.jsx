import { useLang } from '../i18n/LanguageContext';
import WhoCard from '../components/WhoCard';

export default function WhoWeWorkWith() {
  const { t } = useLang();

  const cards = [
    { number: 1, title: t('who_card1') },
    { number: 2, title: t('who_card2') },
    { number: 3, title: t('who_card3') },
    { number: 4, title: t('who_card4') },
  ];

  return (
    <section className="sec" id="who">
      <div className="wrap">
        <span className="label reveal">{t('who_label')}</span>
        <div className="chunky reveal" style={{ fontSize: 'clamp(30px,5vw,64px)', maxWidth: '16ch', marginTop: '12px' }}>
          {t('who_title')} <span className="under">{t('who_under')}</span>
        </div>
        <div className="who-grid">
          {cards.map((card) => (
            <WhoCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
