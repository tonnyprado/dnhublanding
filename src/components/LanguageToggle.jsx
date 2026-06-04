import { useLang } from '../i18n/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang">
      <button
        className={lang === 'en' ? 'on' : ''}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        className={lang === 'ko' ? 'on' : ''}
        onClick={() => setLang('ko')}
      >
        한국어
      </button>
    </div>
  );
}
