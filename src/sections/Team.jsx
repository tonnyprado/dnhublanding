import { useLang } from '../i18n/LanguageContext';
import ImageSlot from '../components/ImageSlot';

export default function Team() {
  const { t } = useLang();

  return (
    <section className="team-sec" id="team">
      {/* Big animated title */}
      <div className="team-hero reveal-stagger">
        <h2 className="team-title">
          <span className="word">We</span>
          <span className="word">are</span>
          <span className="word">people</span>
          <span className="word">who</span>
          <span className="word">care</span>
          <span className="word">about</span>
          <span className="word accent">your</span>
          <span className="word accent">growth</span>
        </h2>
      </div>

      {/* Diana - Left aligned */}
      <div className="team-member left reveal">
        <div className="member-photo">
          <ImageSlot placeholder="Foto de Diana · Co-founder" />
        </div>
        <div className="member-info">
          <span className="member-role">{t('team_role')}</span>
          <h3 className="member-name">{t('team_name1')}</h3>
          <p className="member-bio">{t('team_bio1')}</p>
        </div>
      </div>

      {/* Marco - Right aligned */}
      <div className="team-member right reveal">
        <div className="member-info">
          <span className="member-role">{t('team_role')}</span>
          <h3 className="member-name">{t('team_name2')}</h3>
          <p className="member-bio">{t('team_bio2')}</p>
        </div>
        <div className="member-photo">
          <ImageSlot src="/images/team-marco.png" alt="Marco · Co-founder" />
        </div>
      </div>
    </section>
  );
}
