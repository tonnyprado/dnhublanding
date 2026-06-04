import { useLang } from '../i18n/LanguageContext';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const { t } = useLang();

  const services = [
    {
      index: 1,
      badge: t('svc_badge1'),
      title: t('svc1_title'),
      desc: t('svc1_desc'),
      items: [t('svc1_item1'), t('svc1_item2'), t('svc1_item3'), t('svc1_item4'), t('svc1_item5')],
      color: 'c1',
      image: '/images/svc-ugc.jpg',
    },
    {
      index: 2,
      badge: t('svc_badge1'),
      title: t('svc2_title'),
      desc: t('svc2_desc'),
      items: [t('svc2_item1'), t('svc2_item2'), t('svc2_item3'), t('svc2_item4'), t('svc2_item5')],
      color: 'c2',
      image: '/images/svc-filming.jpg',
    },
    {
      index: 3,
      badge: t('svc_badge1'),
      title: t('svc3_title'),
      desc: t('svc3_desc'),
      items: [t('svc3_item1'), t('svc3_item2'), t('svc3_item3'), t('svc3_item4')],
      color: 'c3',
      image: '/images/svc-social.jpg',
    },
    {
      index: 4,
      badge: t('svc_badge4'),
      title: t('svc4_title'),
      desc: t('svc4_desc'),
      items: [t('svc4_item1'), t('svc4_item2'), t('svc4_item3'), t('svc4_item4'), t('svc4_item5')],
      color: 'c4',
      image: '/images/svc-web.jpg',
    },
  ];

  return (
    <section className="dark-sec sec" id="services">
      <div className="wrap">
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="ghost">{t('svc_title')}</div>
        </div>
        <div className="svc-stack">
          {services.map((svc) => (
            <ServiceCard key={svc.index} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
