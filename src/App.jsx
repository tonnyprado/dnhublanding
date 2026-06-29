import { LanguageProvider, useLang } from './i18n/LanguageContext';
import { useReveal } from './hooks/useReveal';
import { useLenis } from './hooks/useLenis';

import Nav from './components/Nav';
import Ribbon from './components/Ribbon';

import Hero from './sections/Hero';
import Statement from './sections/Statement';
import Stats from './sections/Stats';
import WhatWeDo from './sections/WhatWeDo';
import Services from './sections/Services';
import Work from './sections/Work';
import Marnee from './sections/Marnee';
import WhoWeWorkWith from './sections/WhoWeWorkWith';
import About from './sections/About';
import Team from './sections/Team';
import Faq from './sections/Faq';
import Cta from './sections/Cta';
import Footer from './sections/Footer';

function AppContent() {
  const { t } = useLang();
  useReveal();
  useLenis();

  const ribbonItems1 = [
    t('ribbon_growth'),
    t('ribbon_creator'),
    t('ribbon_ugc'),
    t('ribbon_social'),
    t('ribbon_ai'),
    t('ribbon_seoul'),
  ];

  const ribbonItems2 = [
    t('ribbon_borders'),
    t('ribbon_loud'),
    t('ribbon_bold'),
    t('ribbon_noise'),
  ];


  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Ribbon items={ribbonItems1} tilt />
        <Statement />
        <Stats />
        <WhatWeDo />
        <Services />
        <Work />
        <Ribbon items={ribbonItems2} tilt reverse />
        <Marnee />
        <WhoWeWorkWith />
        <About />
        <Team />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
