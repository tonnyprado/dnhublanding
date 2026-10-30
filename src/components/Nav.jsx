import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';
import Button from './Button';

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? 'open' : ''}`} id="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          DnHub <span className="star">★</span>
        </a>
        <nav className="nav-links">
          <a
            href="#services"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'nav_link_click', { section: 'services' });
              }
            }}
          >
            {t('nav_services')}
          </a>
          <a
            href="#work"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'nav_link_click', { section: 'work' });
              }
            }}
          >
            {t('nav_work')}
          </a>
          <a
            href="#about"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'nav_link_click', { section: 'about' });
              }
            }}
          >
            {t('nav_about')}
          </a>
          <a
            href="#faq"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'nav_link_click', { section: 'faq' });
              }
            }}
          >
            {t('nav_faq')}
          </a>
        </nav>
        <div className="nav-cta">
          <LanguageToggle />
          <Button
            variant="dark"
            href="https://calendly.com/diananonea/1-1-call"
            eventName="book_call_click"
            eventParams={{ location: 'nav', button_text: 'book_a_call' }}
          >
            {t('nav_book')}
          </Button>
          <button
            className="hamb"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
