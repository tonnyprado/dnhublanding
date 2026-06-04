import { useLang } from '../i18n/LanguageContext';
import FaqItem from '../components/FaqItem';

export default function Faq() {
  const { t } = useLang();

  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') },
    { question: t('faq_q4'), answer: t('faq_a4') },
    { question: t('faq_q5'), answer: t('faq_a5') },
    { question: t('faq_q6'), answer: t('faq_a6') },
  ];

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="faq-head reveal">
          <h2>{t('faq_title')}</h2>
          <p className="lead" style={{ maxWidth: '34ch', fontWeight: 600 }}>
            {t('faq_lead')}
          </p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
