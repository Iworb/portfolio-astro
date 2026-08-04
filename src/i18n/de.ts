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
          'Echtzeit-Monitoring- und Analysesystem für Bergbaubetriebe mit Heat-Time-Datenvisualisierung.',
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
        description:
          'Eine kuratierte Auswahl an B2B-Frontend-Arbeit: unabhängig auslieferbare Anwendungen, daten- und rechenintensive Planung sowie schrittweise Migrationen von Legacy-Frontends.',
        count: '04 ausgewählte Systeme',
      },
      projects: [
        {
          slug: 'helix',
          eyebrow: 'Ausgewähltes System / 01',
          client: 'MST Global',
          title: 'HELIX',
          description:
            'Eine Monitoring-Plattform für Tage- und Untertagebetriebe im Bergbau.',
          details:
            'HELIX vereint unabhängig bereitgestellte Monitoring-Anwendungen für Tage- und Untertagebetriebe in einer operativen Umgebung. Die Architektur ermöglicht fachliche Verantwortlichkeiten, gemeinsame UI-Funktionen und eine schrittweise Migration und verbindet dabei Echtzeit-Standort-, Telemetrie- und Betriebsdaten in kartenorientierten Arbeitsabläufen.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Karten & Visualisierung'],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Anwendungsframework für die operativen Frontend-Domänen.',
                },
              ],
            },
            {
              category: 'Interface & Visualisierung',
              items: [
                {
                  name: 'Angular Material',
                  description:
                    'Material-basierte Bedienelemente und Interaktionsmuster für Enterprise-Workflows.',
                },
                {
                  name: 'Angular CDK',
                  description:
                    'Niedrigschwellige Primitiven für Barrierefreiheit, Overlays und Komponenten.',
                },
                {
                  name: 'Angular Flex Layout',
                  description:
                    'Responsive Layout-Hilfen, die in der gesamten Anwendungshülle verwendet werden.',
                },
                {
                  name: 'Tailwind CSS',
                  description:
                    'Utility-first-Styling, das in neueren Frontend-Generationen eingesetzt wird.',
                },
                {
                  name: 'Karten & Visualisierung',
                  description:
                    'Räumliche Oberflächen für die Überwachung von Assets, Ereignissen und Feldoperationen.',
                },
              ],
            },
            {
              category: 'State Management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'State Management für gemeinsame Betriebsdaten und vorhersehbare Workflows.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reaktive Streams für Live-Monitoring-Daten und asynchrone Workflows.',
                },
              ],
            },
            {
              category: 'Anwendungsarchitektur',
              items: [
                {
                  name: 'Transloco',
                  description:
                    'Laufzeitübersetzungen für die Multi-Anwendungsumgebung.',
                },
                {
                  name: 'Microapp-Architektur',
                  description:
                    'Unabhängige Anwendungsgrenzen für inkrementelle Auslieferung und Migration.',
                },
                {
                  name: 'Shared Library',
                  description:
                    'Wiederverwendbare UI- und Plattformfunktionen, die von den Anwendungen gemeinsam genutzt werden.',
                },
              ],
            },
          ],
          brochure: {
            label: 'Öffentliche HELIX-Broschüre lesen',
            url: 'https://mstglobal.com/helix_brochure/',
          },
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Kernsystem / 02',
          client: 'Boot Barn',
          title: 'Merchandise-Planning-Anwendung',
          description:
            'Daten- und rechenintensive Budgetierungsanwendung für Warengruppen.',
          details:
            'Ein hochbelastbares Planungsfrontend, das Budgetplaner nutzen, um Plan- und Istwerte über Warengruppen und Geschäftsjahre hinweg zu vergleichen. Ich konzipierte die Anwendungsarchitektur, das mehrstufige Datenerlebnis und den clientseitigen Berechnungsablauf für voneinander abhängige Kennzahlen – einschließlich Rückmeldung und Wiederherstellung, wenn eine Konfiguration für den Client zu umfangreich wird.',
          tags: ['Angular', 'NgRx', 'TreeGrid'],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Anwendungsframework für den Planungsworkflow und die Integration in das Enterprise-Portal.',
                },
              ],
            },
            {
              category: 'Interface & Visualisierung',
              items: [
                {
                  name: 'TreeGrid by COQsoft',
                  description:
                    'Mehrstufiges Datengitter mit unterschiedlichen Ansichten, Detailgraden und Nutzerkonfigurationen.',
                },
              ],
            },
            {
              category: 'State Management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'Vorhersehbarer Datenfluss für Planungsdaten, Konfiguration und abgeleitete Werte.',
                },
                {
                  name: 'Component Store',
                  description:
                    'Lokales State Management für fokussierte Planungsfunktionen.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reaktive Orchestrierung von Datenladen, Neuberechnung und Nutzerfeedback.',
                },
              ],
            },
            {
              category: 'Tests & Auslieferung',
              items: [
                {
                  name: 'Cypress',
                  description:
                    'End-to-End-Abdeckung komplexer Planungsworkflows.',
                },
                {
                  name: 'Karma',
                  description: 'Frontend-Testwerkzeuge der Angular-Anwendung.',
                },
                {
                  name: 'Azure CI/CD',
                  description:
                    'Unterstützung für Continuous Integration und Delivery über den gesamten Anwendungslebenszyklus.',
                },
              ],
            },
          ],
        },
        {
          slug: 'positron',
          eyebrow: 'Ausgewähltes System / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'Echtzeit-IoT-Monitoring von Sensoren, Geräten und ihren Zuständen auf einer Karte.',
          details:
            'Positron überwachte Sensoren, Geräte und deren wechselnde Zustände auf einer Echtzeitkarte. Ich analysierte den AngularJS-Monolithen, extrahierte gemeinsame Module, teilte die verbleibenden Domänen in Microapps auf und migrierte die Anwendungen unabhängig auf Angular 6. Das System unterstützte sowohl fertige IoT-Lösungen als auch kundenspezifische Geräte mit Werten wie Standort, Geschwindigkeit, Temperatur und Füllstand.',
          tags: [
            'AngularJS',
            'Angular',
            'Microapps',
            'Shared library',
            'IoT-Karten',
          ],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'AngularJS',
                  description:
                    'Legacy-Anwendungsbasis, die analysiert und in Domänengrenzen zerlegt wurde.',
                },
                {
                  name: 'Angular',
                  description:
                    'Zielframework für die unabhängig migrierten Anwendungen.',
                },
              ],
            },
            {
              category: 'Anwendungsarchitektur',
              items: [
                {
                  name: 'Microapp-Architektur',
                  description:
                    'Domänenorientierte Anwendungen, die aus dem früheren Monolithen zusammengesetzt wurden.',
                },
                {
                  name: 'Shared Library',
                  description:
                    'Gemeinsame Module, die aus der ursprünglichen AngularJS-Anwendung extrahiert wurden.',
                },
              ],
            },
            {
              category: 'Interface & Visualisierung',
              items: [
                {
                  name: 'Echtzeit-IoT-Daten',
                  description:
                    'Live-Gerätezustände und numerische Telemetrie in operativen Workflows.',
                },
                {
                  name: 'Kartenschnittstellen',
                  description:
                    'Standortorientierte Ansichten für Sensoren, Geräte und ihre Zustände.',
                },
              ],
            },
          ],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Ausgewähltes System / 04',
          client: 'Boot Barn',
          title: 'Internes Integrationsportal',
          description:
            'Interne Anwendungen zur Überwachung des Zustands von Unternehmensintegrationen.',
          details:
            'Ein internes Portal aus domänenorientierten Anwendungen zur Überwachung von Unternehmensintegrationen. Ich wirkte an der Auswahl der Zielarchitektur für das Frontend mit, zerlegte den Legacy-Monolithen nach Fachdomänen, erstellte die Shared Library und implementierte Teile der Anwendungen in einem Team von etwa drei Entwicklern. Die resultierenden Microapps konnten unabhängigen Entwicklungs- und Auslieferungszyklen folgen.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Shared library'],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Frontend-Framework für die domänenorientierten Portal-Anwendungen.',
                },
              ],
            },
            {
              category: 'State Management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'State Management für Portal-Workflows und Daten zu Integrationsstatus.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reaktive Datenflüsse zwischen unabhängigen Portal-Anwendungen.',
                },
              ],
            },
            {
              category: 'Anwendungsarchitektur',
              items: [
                {
                  name: 'Microapp-Architektur',
                  description:
                    'Nach Geschäftsdomänen aus dem Legacy-Portal extrahierte Anwendungen.',
                },
                {
                  name: 'Shared Library',
                  description:
                    'Gemeinsame Funktionen, die von unabhängig ausgelieferten Anwendungen wiederverwendet werden.',
                },
              ],
            },
          ],
        },
      ],
      detail: {
        back: 'Alle Systeme',
        view: 'System ansehen',
        overview: 'Systemüberblick',
        technologyStack: 'Technologie-Stack',
        gallery: 'Systembilder',
        nda: 'Diese Seite enthält nur den für das Portfolio freigegebenen, NDA-konformen Umfang.',
      },
      note: 'Die Projekthierarchie folgt dem bestätigten Master Profile. Detaillierte Fallstudien werden Rolle, Rahmenbedingungen, Entscheidungen und Ergebnisse innerhalb der genannten NDA-Grenzen weiter ausführen.',
    },
    about: {
      hero: {
        eyebrow: 'Über mich / persönliche Notizen',
        title: 'Irgendwo zwischen neugierig und sehr genau.',
        description:
          'Dies ist ein bewusst fiktionaler Entwurf für Stimme, Rhythmus und Komposition. Er ist weder Biografie noch Aussage über persönliche Tatsachen.',
      },
      placeholder: {
        status: 'Fiktionaler Platzhaltertext',
        notice:
          'Vor der Veröffentlichung durch eigene Worte von O. Koshevierov ersetzen.',
      },
      note: 'Die finale Seite wird eine kurze, menschliche Einführung enthalten: einige echte Interessen, einen Ort oder eine Gewohnheit und die Perspektive hinter der professionellen Arbeit.',
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
          'Selbstständige Frontend-Praxis seit 02/2015: mehr als 11 Jahre Webentwicklung und rund 8 Jahre Angular-/AngularJS-Architektur für internationale B2B-Kunden.',
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
