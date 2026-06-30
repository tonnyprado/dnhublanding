import { useLang } from '../i18n/LanguageContext';
import Button from '../components/Button';

export default function Cta() {
  const { t } = useLang();

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <h2 className="reveal">
          {t('cta_title1')}<br />{t('cta_title2')}
        </h2>
        <p className="reveal">{t('cta_desc')}</p>
        <div className="btns reveal">
          <Button variant="dark" href="https://calendly.com/diananonea/1-1-call">{t('cta_btn1')}</Button>
          <Button variant="lilac" href="mailto:hello@dnhub.co">{t('cta_btn2')}</Button>
        </div>
      </div>
    </section>
  );
}
