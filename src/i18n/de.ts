import type { I18n } from '../models';

export const de: I18n = {
  meta: {
    title: 'Portfolio',
    description: 'Portfolio eines Frontend-Architekten und Entwicklers',
  },
  nav: {
    footer: {
      copyright: 'Oleksandr Koshevierov',
      nameShort: 'OK',
      rights: 'Alle Rechte vorbehalten',
      social: 'Social-Media-Links',
    },
    header: {
      aria: { close: 'Navigation schließen', open: 'Navigation öffnen' },
      language: {
        label: 'Sprache ändern',
        en: 'English',
        de: 'Deutsch',
        ru: 'Русский',
        ua: 'Українська',
      },
      about: 'Über mich',
      available: 'Verfügbar für Projekte',
      contact: 'Kontakt',
      cta: 'Kontakt aufnehmen',
      experience: 'Erfahrung',
      name: 'O. Koshevierov',
      work: 'Projekte',
    },
  },
  pages: {
    home: {
      hero: {
        cta: 'Kontakt aufnehmen',
        cvLink: '/cv/Oleksandr_Koshevierov_Lebenslauf_DE.pdf',
        description:
          'Angular-Spezialist mit mehr als 11 Jahren Erfahrung in Unternehmensanwendungen und Teamleitung.',
        downloadCv: 'Lebenslauf laden',
        label: 'Frontend-Architekt',
        title: 'Komplexe Frontend-Systeme entwickeln, die skalieren.',
        viewWork: 'Projekte ansehen',
      },
      availability: {
        label: 'Verfügbarkeit',
        title: 'Verfügbar für Projekte',
        current: 'Aktuell verfügbar',
        schedule: 'Vollzeit · Remote',
        location: 'Deutschland',
        note: 'Offen für den richtigen Aufbau',
      },
      resume: {
        label: 'Lebenslauf',
        years: '11+',
        details: 'Jahre Erfahrung in der Entwicklung von Frontend-Systemen',
        download: 'PDF laden',
      },
      featuredWork: {
        slug: 'helix',
        label: 'Ausgewählte Arbeiten',
        viewAll: 'Alle Projekte ansehen',
        eyebrow: 'Ausgewähltes System / 01',
        title: 'HELIX Monitoring Platform',
        description:
          'Echtzeit-Monitoring und Analysesystem für Bergbauunternehmen.',
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
      },
      project: {
        label: 'Ausgewähltes Projekt',
        title: 'Positron Tracking System',
        description:
          'Echtzeit-Tracking von Personen und Ausrüstung in industriellen Umgebungen.',
        cta: 'Fallstudie ansehen',
        imageAlt: 'Berglandschaft als Projektmotiv',
      },
      skills: {
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
            items: ['Three.js', 'Leaflet', 'D3', 'Chart.js'],
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
              'Webpack',
              'Vite',
              'Git',
              'GitHub Actions',
              'Cypress',
              'Playwright',
              'AWS',
              'Azure',
              'CI/CD',
            ],
          },
        ],
      },
      approach: {
        label: 'Arbeitsweise',
        title: 'Ich bringe Klarheit in komplexe Frontend-Arbeit.',
        description:
          'Ich löse gerne komplexe Probleme und verwandle Ideen in zuverlässige Produkte, die Menschen nutzen.',
        cta: 'Kontakt aufnehmen',
      },
    },
    work: {
      hero: {
        eyebrow: 'Ausgewählte Systeme / 2018—heute',
        title: 'Architektur für Systeme, die Bestand haben müssen.',
        description: 'Eine kuratierte Auswahl an B2B-Frontend-Arbeit.',
        count: '04 ausgewählte Systeme',
      },
      projects: [
        {
          slug: 'helix',
          eyebrow: 'Featured system / 01',
          client: 'MST Global',
          title: 'HELIX',
          description:
            'Eine Monitoring-Plattform für Tage- und Untertagebetriebe im Bergbau.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Karten & Visualisierung'],
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Key system / 02',
          client: 'Boot Barn',
          title: 'Merchandise-Planning-Anwendung',
          description:
            'Daten- und rechenintensive Budgetierungsanwendung für Warengruppen.',
          tags: ['Angular', 'NgRx', 'TreeGrid'],
        },
        {
          slug: 'positron',
          eyebrow: 'Selected system / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'Echtzeit-IoT-Monitoring von Sensoren, Geräten und ihren Zuständen auf einer Karte.',
          tags: [
            'AngularJS',
            'Angular',
            'Microapps',
            'Shared library',
            'IoT-Karten',
          ],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Selected system / 04',
          client: 'Boot Barn',
          title: 'Internes Integrationsportal',
          description:
            'Interne Anwendungen zur Überwachung des Zustands von Unternehmensintegrationen.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Shared library'],
        },
      ],
      detail: {
        back: 'Alle Systeme',
        view: 'System ansehen',
        overview: 'Systemüberblick',
        signals: 'Architektursignale',
        nda: 'Diese Seite enthält nur den für das Portfolio freigegebenen, NDA-konformen Umfang.',
      },
      note: 'Die Projekthierarchie folgt dem bestätigten Master Profile.',
    },
    about: {
      hero: {
        eyebrow: 'Über mich / persönliche Notizen',
        title: 'Irgendwo zwischen neugierig und sehr genau.',
        description:
          'Dies ist ein bewusst fiktionaler Entwurf für Stimme, Rhythmus und Komposition.',
      },
      placeholder: {
        status: 'Fiktionaler Platzhaltertext',
        notice:
          'Vor der Veröffentlichung durch eigene Worte von O. Koshevierov ersetzen.',
      },
      note: 'Die finale Seite wird eine kurze, menschliche Einführung enthalten.',
      prompts: [
        '[ein Hobby]',
        '[eine aktuelle Neugier]',
        '[eine Stadt / ein Ort]',
        '[eine kleine Lieblingssache]',
      ],
    },
    experience: {
      hero: {
        eyebrow: 'Erfahrung / Arbeitsmodell',
        title: 'Wie ich arbeite, wenn das System schwierig wird.',
        description:
          'Keine Projektliste, sondern ein Blick auf Verantwortung, Entscheidungen und Arbeitskontext hinter dem Portfolio.',
      },
      practice: {
        label: 'Kontinuierliche Praxis',
        description:
          'Selbstständige Frontend-Praxis seit 02/2015: mehr als 11 Jahre Webentwicklung und rund 8 Jahre Angular-/AngularJS-Architektur.',
      },
      areas: [
        {
          title: 'Architektur',
          description:
            'Komplexen Frontends eine Struktur geben, die Veränderungen trägt.',
        },
        {
          title: 'Daten & Interface',
          description: 'Anspruchsvolle Informationen im Client nutzbar machen.',
        },
        {
          title: 'Delivery',
          description:
            'Entscheidungen durch Implementierung und Release verantworten.',
        },
        {
          title: 'Zusammenarbeit',
          description: 'Technische Arbeit in kleinen Teams koordinieren.',
        },
      ],
      posture: {
        label: 'Technische Haltung',
        description:
          'Architektur ist nur nützlich, wenn sie die nächste Veränderung sicherer macht.',
      },
      chronology: {
        label: 'Vollständiger Werdegang',
        description:
          'Der Lebenslauf enthält Daten, Ausbildung und den vollständigen beruflichen Werdegang.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt / Einstieg',
        title: 'Kontakt aufnehmen.',
        description:
          'Wählen Sie einen Kanal — beide Links funktionieren direkt.',
      },
      email: { label: 'E-Mail senden.', address: 'iworb.ne@gmail.com' },
      linkedin: { label: 'Auf LinkedIn verbinden.', action: 'LinkedIn öffnen' },
      details: {
        location: {
          label: 'Ort & Format',
          description:
            'Hanau, Deutschland. Remote / internationales B2B. Arbeitserlaubnis für Deutschland.',
        },
        phone: {
          label: 'Telefon',
          number: '+49 151 72585876',
          action: 'Direkt anrufen',
        },
        cv: {
          label: 'Lebenslauf',
          description:
            'Zuerst den vollständigen beruflichen Werdegang ansehen?',
          action: 'Lebenslauf laden',
        },
      },
    },
  },
};
