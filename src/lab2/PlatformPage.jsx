import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Partners from './components/Partners/Partners';
import Lecturers from './components/Lecturers/Lecturers';
import ExtraBlock from './components/ExtraBlock/ExtraBlock';
import { lecturers } from './data/lecturers';
import { partners } from './data/partners';
import './PlatformPage.css';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'partners', label: 'Партнеры' },
  { id: 'about', label: 'О нас' },
  { id: 'lecturers', label: 'Лекторы' },
];

const aboutText =
  'Наша учебная платформа соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию.';

const heroTitle =
  'Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.';

const heroImage =
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80';

function PlatformPage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="lab2-platform">
      <div className="lab2-platform__shell">
        <Header
          items={navItems}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <Hero
          imageSrc={heroImage}
          imageAlt="Лектор проводит занятие в аудитории"
          title={heroTitle}
          onFindLecturer={() => handleNavigate('lecturers')}
        />
      </div>

      <About text={aboutText} />
      <Partners partners={partners} />
      <Lecturers lecturers={lecturers} />
      <ExtraBlock lecturers={lecturers} />

      <footer className="lab2-platform__footer">
        Учебная платформа · Лабораторная работа 2 · онлайн / офлайн форматы
      </footer>
    </div>
  );
}

export default PlatformPage;
