import type { HomeI18n } from './types';

export const de: HomeI18n = {
  meta: {
    title: 'Portfolio',
    description: 'Portfolio eines Frontend-Architekten und Entwicklers',
  },
  nav: {
    work: 'Projekte',
    experience: 'Erfahrung',
    about: 'Über mich',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  language: {
    label: 'Sprache ändern',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    ua: 'Українська',
  },
  mobile: {
    open: 'Navigation öffnen',
    close: 'Navigation schließen',
    available: 'Verfügbar für Projekte',
  },
  hero: {
    label: 'Frontend-Architekt',
    title: 'Komplexe Frontend-Systeme entwickeln, die skalieren.',
    description:
      'Angular-Spezialist mit über 10 Jahren Erfahrung in Unternehmensanwendungen und Teamleitung.',
    viewWork: 'Projekte ansehen',
    downloadCv: 'Lebenslauf laden',
    cvLink: '/cv/Oleksandr_Koshevierov_Lebenslauf_DE.pdf'
  },
  experience: { label: 'Erfahrung', years: 'Jahre Erfahrung' },
  availability: {
    label: 'Verfügbarkeit',
    title: 'Verfügbar für Projekte',
    current: 'Aktuell verfügbar',
    schedule: 'Vollzeit · Remote',
    location: 'Deutschland',
  },
  project: {
    label: 'Ausgewähltes Projekt',
    title: 'Positron Tracking System',
    description:
      'Echtzeit-Tracking von Personen und Ausrüstung in industriellen Umgebungen.',
    cta: 'Fallstudie ansehen',
    imageAlt: 'Berglandschaft als Projektmotiv',
  },
  tech: {
    label: 'Technologie-Stack',
    items: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Microfrontends',
      'Node.js',
      'AWS',
    ],
  },
  about: {
    label: 'Über mich',
    description:
      'Ich löse gerne komplexe Probleme und verwandle Ideen in zuverlässige Produkte, die Menschen nutzen.',
    cta: 'Mehr über mich',
  },
  industries: {
    label: 'Branchen',
    items: ['Bergbau', 'Industrie', 'Einzelhandel', 'IoT', 'Energie'],
  },
  contact: {
    title: 'Lassen Sie uns zusammenarbeiten',
    cta: 'Kontakt aufnehmen',
  },
  selected: {
    label: 'Ausgewählte Arbeiten',
    viewAll: 'Alle Projekte ansehen',
    projects: [
      {
        title: 'HELIX Monitoring Platform',
        description:
          'Echtzeit-Monitoring und Analysesystem für Bergbauunternehmen mit Heatmap-Datenvisualisierung.',
        tags: ['Angular', 'Maps', 'RxJS', 'NgRx'],
        imageAlt: 'Industrielle Überwachungsanlage',
      },
      {
        title: 'Boot Barn Portal',
        description:
          'Plattform für Einzelhandelsprozesse und Finanzplanung für über 150 Filialen.',
        tags: ['Angular', '.NET', 'SQL'],
        imageAlt: 'Innenraum eines Einzelhandelsgeschäfts',
      },
      {
        title: 'Universal Configurator',
        description:
          'Einbettbare Produktkonfigurationsplattform für Partner und Händler.',
        tags: ['Angular', 'TypeScript', 'API'],
        imageAlt: 'Industrielle Produktionshalle',
      },
    ],
  },
  education: {
    label: 'Ausbildung',
    degree: 'Master of Computer Science',
    university: 'Nationale Universität Charkiw, benannt nach W. N. Karasin',
    period: '2013 – 2015',
  },
  languages: {
    label: 'Sprachen',
    items: [
      { name: 'Ukrainisch', level: 'Muttersprache' },
      { name: 'Russisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'Fließend' },
      { name: 'Deutsch', level: 'Mittelstufe' },
    ],
  },
  location: {
    title: 'Ansässig in Deutschland',
    description: 'Offen für neue Möglichkeiten und spannende Projekte.',
  },
  footer: {
    copyright: '© 2024 Oleksandr Koshevierov.',
    rights: 'Alle Rechte vorbehalten.',
    social: 'Social-Media-Links',
  },
};
