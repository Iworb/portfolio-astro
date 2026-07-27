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
  work: {
    eyebrow: 'Ausgewählte Systeme / 2018—heute',
    title: 'Architektur für Systeme, die Bestand haben müssen.',
    description:
      'Eine kuratierte Auswahl an B2B-Frontend-Arbeit: unabhängig deploybare Anwendungen, daten- und rechenintensive Planung sowie schrittweise Migrationen bestehender Frontends.',
    count: '04 ausgewählte Systeme',
    projects: [
      {
        slug: 'helix',
        eyebrow: 'Featured system / 01',
        client: 'MST Global',
        title: 'HELIX',
        description:
          'Eine Monitoring-Plattform für Tage- und Untertagebetriebe im Bergbau. Ich entwarf die Microapp-Architektur und die Shared Library, damit unabhängig entwickelte Anwendungen separat bereitgestellt und schrittweise migriert werden können.',
        tags: [
          'Angular 7–22',
          'Microapps',
          'Shared Library',
          'Karten & Visualisierung',
        ],
        featured: true,
      },
      {
        slug: 'merchandise-planning',
        eyebrow: 'Key system / 02',
        client: 'Boot Barn',
        title: 'Merchandise-Planning-Anwendung',
        description:
          'Daten- und rechenintensive Budgetierungsanwendung für Warengruppen. Ich entwarf die Frontend-Architektur, ein mehrstufiges Datenraster und ein clientseitiges Berechnungssystem für voneinander abhängige Kennzahlen.',
        tags: ['Angular', 'NgRx', 'TreeGrid', 'Cypress'],
      },
      {
        slug: 'positron',
        eyebrow: 'Selected system / 03',
        client: 'iQuipsys',
        title: 'Positron',
        description:
          'Echtzeit-IoT-Monitoring von Sensoren, Geräten und ihren Zuständen auf einer Karte. Ich zerlegte den AngularJS-Monolithen eigenständig in Domänen und migrierte die Anwendungen auf Angular 6.',
        tags: ['AngularJS', 'Angular 6', 'Microapps', 'IoT-Karten'],
      },
      {
        slug: 'integration-portal',
        eyebrow: 'Selected system / 04',
        client: 'Boot Barn',
        title: 'Internes Integrationsportal',
        description:
          'Interne Anwendungen zur Überwachung des Zustands von Unternehmensintegrationen. In einem Team von etwa drei Personen prägte ich die Frontend-Architektur und zerlegte ein Legacy-Portal in domänenorientierte Microapps und eine Shared Library.',
        tags: ['Angular 11', 'TypeScript', 'Microapps', 'Shared Libraries'],
      },
    ],
    detail: {
      back: 'Alle Systeme',
      view: 'System ansehen',
      overview: 'Systemüberblick',
      signals: 'Architektursignale',
      nda: 'Diese Seite enthält nur den für das Portfolio freigegebenen, NDA-konformen Umfang.',
    },
    note: 'Die Projekthierarchie folgt dem bestätigten Master Profile. Detaillierte Case Studies werden Rolle, Rahmenbedingungen, Entscheidungen und Ergebnisse innerhalb der NDA-Grenzen vertiefen.',
  },
  aboutPage: {
    eyebrow: 'Über mich / persönliche Notizen',
    status: 'Fiktionaler Platzhaltertext',
    notice:
      'Vor der Veröffentlichung durch eigene Worte von O. Koshevierov ersetzen.',
    title: 'Irgendwo zwischen neugierig und sehr genau.',
    description:
      'Dies ist ein bewusst fiktionaler Entwurf für Stimme, Rhythmus und Komposition. Er ist weder Biografie noch Aussage über persönliche Fakten.',
    note: 'Die finale Seite wird eine kurze, menschliche Einführung enthalten: einige echte Interessen, einen Ort oder eine Gewohnheit und die Perspektive hinter der professionellen Arbeit.',
    prompts: [
      '[ein Hobby]',
      '[eine aktuelle Neugier]',
      '[eine Stadt / ein Ort]',
      '[eine kleine Lieblingssache]',
    ],
  },
  experiencePage: {
    eyebrow: 'Erfahrung / Arbeitsmodell',
    title: 'Wie ich arbeite, wenn das System schwierig wird.',
    description:
      'Keine Projektliste, sondern ein Blick auf Verantwortung, Entscheidungen und Arbeitskontext hinter dem Portfolio.',
    practice:
      'Selbstständige Frontend-Praxis seit 02/2015: mehr als 11 Jahre Webentwicklung und rund 8 Jahre Angular-/AngularJS-Architektur für internationale B2B-Kunden.',
    areas: [
      {
        title: 'Architektur',
        description:
          'Komplexen Frontends eine Struktur geben, die Veränderungen trägt: Microapps, Shared Libraries, Domänenzerlegung und bewusste Migrationen.',
      },
      {
        title: 'Daten & Interface',
        description:
          'Anspruchsvolle Informationen im Client nutzbar machen: mehrstufige Tabellen, Berechnungen, vernetzte Daten, Karten und Visualisierung.',
      },
      {
        title: 'Delivery',
        description:
          'Entscheidungen durch Implementierung und Release verantworten: Integration, Optimierung, Tests und Mitarbeit an CI/CD.',
      },
      {
        title: 'Zusammenarbeit',
        description:
          'Technische Arbeit in kleinen Teams koordinieren und bei Bedarf direkt mit Kunden kommunizieren.',
      },
    ],
    posture:
      'Architektur ist nur nützlich, wenn sie die nächste Veränderung sicherer macht: Domänen entkoppeln, nur Notwendiges teilen und Komplexität sichtbar machen.',
    cv: 'Der Lebenslauf enthält Daten, Ausbildung und den vollständigen beruflichen Werdegang.',
  },
  contactPage: {
    eyebrow: 'Kontakt / Einstieg',
    title: 'Kontakt aufnehmen.',
    description: 'Wählen Sie einen Kanal — beide Links funktionieren direkt.',
    email: 'E-Mail senden.',
    linkedin: 'Auf LinkedIn verbinden.',
    practical: 'Praktische Details',
    location:
      'Hanau, Deutschland. Remote / internationales B2B. Arbeitserlaubnis für Deutschland.',
    phone: 'Direkt anrufen',
    cv: 'Zuerst den vollständigen beruflichen Werdegang ansehen?',
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
      'Angular-Spezialist mit mehr als 11 Jahren Erfahrung in Unternehmensanwendungen und Teamleitung.',
    viewWork: 'Projekte ansehen',
    downloadCv: 'Lebenslauf laden',
    cvLink: '/cv/Oleksandr_Koshevierov_Lebenslauf_DE.pdf',
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
    title: 'Werkzeuge für belastbare und weiterentwickelbare Frontends.',
    groups: [
      {
        icon: 'lucide:panels-top-left',
        label: 'Frontend',
        items: ['Angular', 'React', 'Vue', 'TypeScript'],
      },
      {
        icon: 'lucide:boxes',
        label: 'State & Architektur',
        items: ['RxJS', 'NgRx', 'Microfrontends'],
      },
      {
        icon: 'lucide:chart-no-axes-combined',
        label: 'Visualisierung',
        items: ['Three.js', 'Leaflet', 'D3'],
      },
      {
        icon: 'lucide:smartphone',
        label: 'Cross-Platform',
        items: ['Flutter'],
      },
      {
        icon: 'lucide:wrench',
        label: 'Tools & Delivery',
        items: [
          'Node.js',
          'Vite',
          'Git',
          'GitHub Actions',
          'Cypress',
          'AWS',
          'CI/CD',
        ],
      },
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
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
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
    copyright: 'Oleksandr Koshevierov.',
    rights: 'Alle Rechte vorbehalten.',
    social: 'Social-Media-Links',
  },
};
