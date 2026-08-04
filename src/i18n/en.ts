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
      resume: { label: 'Résumé', years: '11+', details: 'years building frontend systems', download: 'Get the PDF' },
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
          tags: [
            'Angular 7–22',
            'Microapps',
            'Shared library',
            'Maps & visualisation',
          ],
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Key system / 02',
          client: 'Boot Barn',
          title: 'Merchandise planning application',
          description:
            'Data- and computation-intensive budgeting application for merchandise categories.',
          tags: ['Angular', 'NgRx', 'TreeGrid', 'Cypress'],
        },
        {
          slug: 'positron',
          eyebrow: 'Selected system / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'Real-time IoT monitoring of sensors, devices and their states on a map.',
          tags: ['AngularJS', 'Angular 6', 'Microapps', 'IoT maps'],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Selected system / 04',
          client: 'Boot Barn',
          title: 'Internal integration portal',
          description:
            'Internal applications for monitoring the state of corporate integrations.',
          tags: ['Angular 11', 'TypeScript', 'Microapps', 'Shared libraries'],
        },
      ],
      detail: {
        back: 'All systems',
        view: 'View system',
        overview: 'System overview',
        signals: 'Architecture signals',
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
        eyebrow: 'Experience / operating model',
        title: 'How I work when the system is difficult.',
        description:
          'Not a list of projects. A view of the responsibility, decisions and working context behind the portfolio.',
      },
      practice: {
        label: 'Continuous practice',
        description:
          'Independent frontend practice since 02/2015: more than 11 years in web development and around 8 years of Angular/AngularJS architecture for international B2B clients.',
      },
      areas: [
        {
          title: 'Architecture',
          description:
            'Give complex frontends a structure that supports change.',
        },
        {
          title: 'Data & interface',
          description: 'Make demanding information usable on the client.',
        },
        {
          title: 'Delivery',
          description: 'Own choices through implementation and release.',
        },
        {
          title: 'Collaboration',
          description: 'Coordinate technical work in small teams.',
        },
      ],
      posture: {
        label: 'Technical posture',
        description:
          'Architecture is useful only when it makes the next change safer.',
      },
      chronology: {
        label: 'Full chronology',
        description:
          'The CV holds dates, education and the complete professional record.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact / start here',
        title: 'Get in touch.',
        description: 'Choose a channel — both links work directly.',
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
