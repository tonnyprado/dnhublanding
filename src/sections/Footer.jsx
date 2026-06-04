import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a className="brand" href="#top">
              DnHub Corp <span className="star">★</span>
            </a>
            <p className="foot-tag">{t('foot_tag')}</p>
          </div>
          <nav className="foot-nav">
            <a href="#what">{t('nav_what')}</a>
            <a href="#services">{t('nav_services')}</a>
            <a href="#work">{t('nav_work')}</a>
            <a href="#about">{t('nav_about')}</a>
            <a href="#faq">{t('nav_faq')}</a>
            <a href="#contact">{t('nav_contact')}</a>
          </nav>
        </div>
        <div className="foot-bottom">
          <a href="mailto:hello@dnhub.co">hello@dnhub.co</a>
          <span className="cr">{t('foot_copy')}</span>
        </div>
      </div>
    </footer>
  );
}
