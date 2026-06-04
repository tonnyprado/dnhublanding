import { useLang } from '../i18n/LanguageContext';
import Button from '../components/Button';
import TagPill from '../components/TagPill';

export default function WhatWeDo() {
  const { t } = useLang();

  return (
    <section className="sec" id="what" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="yblock reveal">
          <h2>{t('what_title')}</h2>
          <p className="body">{t('what_body')}</p>
          <div className="tags">
            <TagPill>{t('what_tag1')}</TagPill>
            <TagPill>{t('what_tag2')}</TagPill>
            <TagPill>{t('what_tag3')}</TagPill>
          </div>
          <Button variant="dark" href="#services">{t('what_cta')}</Button>
        </div>
      </div>
    </section>
  );
}
