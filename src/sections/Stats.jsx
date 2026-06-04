import { useLang } from '../i18n/LanguageContext';

export default function Stats() {
  const { t } = useLang();

  const stats = [
    { value: '50', suffix: '+', label: t('stats_brands') },
    { value: '3M', suffix: '+', label: t('stats_reach') },
    { value: '3', suffix: '', label: t('stats_continents') },
    { value: '4', suffix: '', label: t('stats_services') },
  ];

  return (
    <section className="sec stats-sec">
      <div className="wrap stats-float">
        {stats.map((stat, i) => (
          <div className="stat-f reveal" key={i}>
            <div className="n">
              {stat.value}
              {stat.suffix && <span className="mk">{stat.suffix}</span>}
            </div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
