import type { I18n } from '../models';

export const en: I18n = {
  meta: {
    title: 'Portfolio',
    description: 'Frontend architect and developer portfolio',
  },
  nav: {
    footer: {
      copyright: 'Oleksandr Koshevierov',
      nameShort: 'OK',
      rights: 'All rights reserved',
      social: 'Social links',
    },
    header: {
      aria: { close: 'Close navigation', open: 'Open navigation' },
      language: {
        label: 'Change language',
        en: 'English',
        de: 'Deutsch',
        ru: 'Русский',
        ua: 'Українська',
      },
      about: 'About',
      available: 'Available for work',
      contact: 'Contact',
      cta: 'Contact me',
      experience: 'Experience',
      name: 'O. Koshevierov',
      work: 'Work',
    },
  },
  pages: {
    home: {
      hero: {
        cta: 'Contact me',
        cvLink: '/cv/Oleksandr_Koshevierov_CV_EN.pdf',
        description:
          'Angular specialist with more than 11 years of experience in enterprise applications and team leadership.',
        downloadCv: 'Download CV',
        label: 'Frontend architect',
        title: 'Building complex frontend systems that scale.',
        viewWork: 'View my work',
      },
      availability: {
        label: 'Availability',
        title: 'Available for work',
        current: 'Currently available',
        schedule: 'Full-time · Remote',
        location: 'Germany',
        note: 'Open for the right build',
      },
      resume: {
        label: 'Résumé',
        years: '11+',
        details: 'years building frontend systems',
        download: 'Get the PDF',
      },
      featuredWork: {
        slug: 'helix',
        label: 'Selected Work',
        viewAll: 'View all projects',
        eyebrow: 'Selected system / 01',
        title: 'HELIX Monitoring Platform',
        description:
          'Real-time monitoring and analytics system for mining operations with heat-time data visualization.',
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
      },
      project: {
        label: 'Featured Project',
        title: 'Positron Tracking System',
        description:
          'Real-time tracking of personnel and equipment in industrial environments.',
        cta: 'View case study',
        imageAlt: 'Mountain landscape representing the project',
      },
      skills: {
        label: 'Tech stack',
        title: 'Tools I use to build and evolve frontend systems.',
        groups: [
          {
            icon: 'lucide:panels-top-left',
            label: 'Frontend',
            items: ['Angular', 'React', 'Vue', 'TypeScript'],
          },
          {
            icon: 'lucide:boxes',
            label: 'State & architecture',
            items: ['RxJS', 'NgRx', 'Microfrontends'],
          },
          {
            icon: 'lucide:chart-no-axes-combined',
            label: 'Visualisation',
            items: ['Three.js', 'Leaflet', 'D3', 'Chart.js'],
          },
          {
            icon: 'lucide:smartphone',
            label: 'Cross-platform',
            items: ['Flutter'],
          },
          {
            icon: 'lucide:wrench',
            label: 'Tools & delivery',
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
        label: 'How I work',
        title: 'I bring clarity to complex frontend work.',
        description:
          'I enjoy solving complex problems and turning ideas into reliable products people use.',
        cta: 'Contact me',
      },
    },
    work: {
      hero: {
        eyebrow: 'Selected systems / 2018—now',
        title: 'Architecture for systems that have to hold up.',
        description:
          'A curated selection of B2B frontend work: independently deployable applications, data- and computation-intensive planning, and gradual migrations of legacy frontends.',
        count: '04 selected systems',
      },
      projects: [
        {
          slug: 'helix',
          eyebrow: 'Featured system / 01',
          client: 'MST Global',
          title: 'HELIX',
          description:
            'A mining monitoring platform for surface and underground operations.',
          details:
            'HELIX brings independently deployed monitoring applications into one operational environment for surface and underground operations. The architecture supports domain ownership, shared UI capabilities and a gradual migration path while connecting real-time location, telemetry and operational data in map-focused workflows.',
          tags: [
            'Angular',
            'NgRx',
            'Microapps',
            'Shared library',
            'Maps & visualisation',
          ],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Application framework for the operational frontend domains.',
                },
              ],
            },
            {
              category: 'Interface & visualisation',
              items: [
                {
                  name: 'Angular Material',
                  description:
                    'Material-based controls and interaction patterns for enterprise workflows.',
                },
                {
                  name: 'Angular CDK',
                  description:
                    'Low-level accessibility, overlay and component primitives.',
                },
                {
                  name: 'Angular Flex Layout',
                  description:
                    'Responsive layout utilities used across the application shell.',
                },
                {
                  name: 'Tailwind CSS',
                  description:
                    'Utility-first styling used in newer frontend generations.',
                },
                {
                  name: 'Maps & visualisation',
                  description:
                    'Spatial interfaces for monitoring assets, events and field operations.',
                },
              ],
            },
            {
              category: 'State management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'State management for shared operational data and predictable workflows.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reactive streams for live monitoring data and asynchronous workflows.',
                },
              ],
            },
            {
              category: 'Application architecture',
              items: [
                {
                  name: 'Transloco',
                  description:
                    'Runtime translation support for the multi-application environment.',
                },
                {
                  name: 'Microapp architecture',
                  description:
                    'Independent application boundaries for incremental delivery and migration.',
                },
                {
                  name: 'Shared library',
                  description:
                    'Reusable UI and platform capabilities shared across the applications.',
                },
              ],
            },
          ],
          brochure: {
            label: 'Read the public HELIX brochure',
            url: 'https://mstglobal.com/helix_brochure/',
          },
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Key system / 02',
          client: 'Boot Barn',
          title: 'Merchandise planning application',
          description:
            'Data- and computation-intensive budgeting application for merchandise categories.',
          details:
            'A high-load planning frontend used by budget planners to compare planned and actual values across merchandise categories and financial years. I designed the application architecture, the multi-level data experience and the client-side calculation flow for interdependent metrics, including feedback and recovery when a configuration becomes too heavy for the client machine.',
          tags: ['Angular', 'NgRx', 'TreeGrid'],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Application framework for the planning workflow and enterprise portal integration.',
                },
              ],
            },
            {
              category: 'Interface & visualisation',
              items: [
                {
                  name: 'TreeGrid by COQsoft',
                  description:
                    'Multi-level data grid with different views, detail levels and user configuration.',
                },
              ],
            },
            {
              category: 'State management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'Predictable state flow for planning data, configuration and derived values.',
                },
                {
                  name: 'Component Store',
                  description:
                    'Localized state management for focused planning features.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reactive orchestration of data loading, recalculation and user feedback.',
                },
              ],
            },
            {
              category: 'Testing & delivery',
              items: [
                {
                  name: 'Cypress',
                  description:
                    'End-to-end coverage for complex planning workflows.',
                },
                {
                  name: 'Karma',
                  description:
                    'Frontend test tooling used in the Angular application.',
                },
                {
                  name: 'Azure CI/CD',
                  description:
                    'Continuous integration and delivery support for the application lifecycle.',
                },
              ],
            },
          ],
        },
        {
          slug: 'positron',
          eyebrow: 'Selected system / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'Real-time IoT monitoring of sensors, devices and their states on a map.',
          details:
            'Positron monitored sensors, devices and their changing states on a real-time map. I analyzed the AngularJS monolith, extracted shared modules, split the remaining domains into microapps and independently migrated the applications to Angular 6. The system supported both ready-made IoT solutions and customer-specific devices with values such as location, speed, temperature and fill level.',
          tags: [
            'AngularJS',
            'Angular',
            'Microapps',
            'Shared library',
            'IoT maps',
          ],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'AngularJS',
                  description:
                    'Legacy application foundation analyzed and decomposed into domain boundaries.',
                },
                {
                  name: 'Angular',
                  description:
                    'Target framework for the independently migrated applications.',
                },
              ],
            },
            {
              category: 'Application architecture',
              items: [
                {
                  name: 'Microapp architecture',
                  description:
                    'Domain-focused applications composed from the former monolith.',
                },
                {
                  name: 'Shared library',
                  description:
                    'Common modules extracted from the original AngularJS application.',
                },
              ],
            },
            {
              category: 'Interface & visualisation',
              items: [
                {
                  name: 'Real-time IoT data',
                  description:
                    'Live device states and numeric telemetry presented in operational workflows.',
                },
                {
                  name: 'Map interfaces',
                  description:
                    'Location-centered views for sensors, devices and their states.',
                },
              ],
            },
          ],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Selected system / 04',
          client: 'Boot Barn',
          title: 'Internal integration portal',
          description:
            'Internal applications for monitoring the state of corporate integrations.',
          details:
            'An internal portal composed of domain-focused applications for monitoring corporate integrations. I helped select the target frontend architecture, decomposed the legacy monolith by business domain, created the shared library and implemented part of the applications in a team of around three developers. The resulting microapps could follow independent development and delivery cycles.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Shared library'],
          technologies: [
            {
              category: 'Framework',
              items: [
                {
                  name: 'Angular',
                  description:
                    'Frontend framework for the domain-focused portal applications.',
                },
              ],
            },
            {
              category: 'State management',
              items: [
                {
                  name: 'NgRx',
                  description:
                    'State management for portal workflows and integration status data.',
                },
                {
                  name: 'RxJS',
                  description:
                    'Reactive data flows across independent portal applications.',
                },
              ],
            },
            {
              category: 'Application architecture',
              items: [
                {
                  name: 'Microapp architecture',
                  description:
                    'Business-domain applications extracted from the legacy portal.',
                },
                {
                  name: 'Shared library',
                  description:
                    'Common capabilities reused by the independently delivered applications.',
                },
              ],
            },
          ],
        },
      ],
      detail: {
        back: 'All systems',
        view: 'View system',
        overview: 'System overview',
        technologyStack: 'Technology stack',
        gallery: 'System images',
        nda: 'This page contains only the public, NDA-safe scope approved for the portfolio.',
      },
      note: 'The project hierarchy follows the confirmed master profile. Detailed case studies will expand on role, constraints, decisions and outcomes within the stated NDA boundaries.',
    },
    about: {
      hero: {
        eyebrow: 'About / personal notes',
        title: 'Somewhere between curious and very particular.',
        description:
          'This is a deliberately fictional draft for voice, rhythm and composition. It is not a biography or a statement of personal facts.',
      },
      placeholder: {
        status: 'Fictional placeholder copy',
        notice: 'Replace with O. Koshevierov’s own words before publishing.',
      },
      note: 'The final page will hold a short, human introduction: a few real interests, a place or habit, and the perspective behind the professional work.',
      prompts: [
        '[a hobby]',
        '[a current curiosity]',
        '[a city / place]',
        '[a favourite small thing]',
      ],
    },
    experience: {
      hero: {
        eyebrow: 'Professional experience / 02.2015—now',
        title: 'Senior frontend development with architectural responsibility.',
        description:
          'Freelance Senior Frontend Developer and Architect for international B2B clients in the US, Australia and Ukraine — working remotely from Germany since 04/2023.',
      },
      practice: {
        label: 'Continuous independent practice',
        description:
          'More than 11 years in web development, including around 8 years designing and evolving large Angular and AngularJS frontends. My work spans retail, budget and procurement planning, industrial IoT monitoring, mining and e-learning — from technical discovery and architecture to implementation, testing and delivery.',
      },
      areas: [
        {
          title: 'Frontend architecture',
          description:
            'Design microfrontend and microapp ecosystems with shells and shared libraries; decompose legacy monoliths by domain; and plan major Angular migrations so applications can evolve and be released independently.',
        },
        {
          title: 'Complex client applications',
          description:
            'Build data- and computation-intensive interfaces: hierarchical tables, interdependent client-side calculations, map-based workflows, and 2D/3D visualisation. Design for practical performance, feedback and recovery when user configurations become too demanding.',
        },
        {
          title: 'End-to-end technical delivery',
          description:
            'Take responsibility from clarifying a business need and selecting tools through Angular and TypeScript implementation, API integration, test coverage and contribution to CI/CD. Use Angular, RxJS and NgRx as the core stack, supported by Docker, TeamCity or Azure CI/CD where relevant.',
        },
        {
          title: 'Technical collaboration',
          description:
            'Coordinate technical work in teams of up to three developers, break down and distribute improvement work, and collaborate directly with clients or adjacent engineering teams where the role requires it.',
        },
      ],
      posture: {
        label: 'Working principle',
        description:
          'I balance hands-on frontend delivery with architectural direction. The goal is not architecture for its own sake, but systems that remain understandable, reliable and safe to change as products, teams and frameworks evolve.',
      },
      chronology: {
        label: 'Career timeline',
        description:
          'Freelance Senior Frontend Developer and Architect, 02/2015—present. The CV includes the full chronology, education and a complete technology overview.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact / start here',
        title: 'Get in touch.',
        description: 'Choose a channel',
      },
      email: { label: 'Send an email.', address: 'iworb.ne@gmail.com' },
      linkedin: { label: 'Connect on LinkedIn.', action: 'Open LinkedIn' },
      details: {
        location: {
          label: 'Location & format',
          description:
            'Hanau, Germany. Remote / international B2B. Authorized to work in Germany.',
        },
        phone: {
          label: 'Phone',
          number: '+49 151 72585876',
          action: 'Direct call',
        },
        cv: {
          label: 'Résumé',
          description: 'Prefer the complete professional record first?',
          action: 'Download CV',
        },
      },
    },
  },
};
