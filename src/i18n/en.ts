import type { HomeI18n } from './types';

export const en: HomeI18n = {
  meta: {
    title: 'Portfolio',
    description: 'Frontend architect and developer portfolio',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
  },
  work: {
    eyebrow: 'Selected systems / 2018—now',
    title: 'Architecture for systems that have to hold up.',
    description:
      'A curated selection of B2B frontend work: independently deployable applications, data- and computation-intensive planning, and gradual migrations of legacy frontends.',
    count: '04 selected systems',
    projects: [
      {
        slug: 'helix',
        eyebrow: 'Featured system / 01',
        client: 'MST Global',
        title: 'HELIX',
        description:
          'A mining monitoring platform for surface and underground operations. I designed the microapp architecture and shared library that allow independently developed applications to be deployed and migrated progressively.',
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
          'Data- and computation-intensive budgeting application for merchandise categories. I designed the frontend architecture, a multi-level data grid, and a client-side calculation system for interdependent metrics.',
        tags: ['Angular', 'NgRx', 'TreeGrid', 'Cypress'],
      },
      {
        slug: 'positron',
        eyebrow: 'Selected system / 03',
        client: 'iQuipsys',
        title: 'Positron',
        description:
          'Real-time IoT monitoring of sensors, devices and their states on a map. I independently decomposed the AngularJS monolith into domains and migrated the applications to Angular 6.',
        tags: ['AngularJS', 'Angular 6', 'Microapps', 'IoT maps'],
      },
      {
        slug: 'integration-portal',
        eyebrow: 'Selected system / 04',
        client: 'Boot Barn',
        title: 'Internal integration portal',
        description:
          'Internal applications for monitoring the state of corporate integrations. In a team of about three, I shaped the frontend architecture and decomposed a legacy portal into domain-focused microapps and a shared library.',
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
  aboutPage: {
    eyebrow: 'About / personal notes',
    status: 'Fictional placeholder copy',
    notice: 'Replace with O. Koshevierov’s own words before publishing.',
    title: 'Somewhere between curious and very particular.',
    description:
      'This is a deliberately fictional draft for voice, rhythm and composition. It is not a biography or a statement of personal facts.',
    note: 'The final page will hold a short, human introduction: a few real interests, a place or habit, and the perspective behind the professional work.',
    prompts: [
      '[a hobby]',
      '[a current curiosity]',
      '[a city / place]',
      '[a favourite small thing]',
    ],
  },
  experiencePage: {
    eyebrow: 'Experience / operating model',
    title: 'How I work when the system is difficult.',
    description:
      'Not a list of projects. A view of the responsibility, decisions and working context behind the portfolio.',
    practice:
      'Independent frontend practice since 02/2015: more than 11 years in web development and around 8 years of Angular/AngularJS architecture for international B2B clients.',
    areas: [
      {
        title: 'Architecture',
        description:
          'Give complex frontends a structure that supports change: microapps, shared libraries, domain decomposition and deliberate migrations.',
      },
      {
        title: 'Data & interface',
        description:
          'Make demanding information usable on the client: multi-level tables, calculations, connected datasets, maps and visualisation.',
      },
      {
        title: 'Delivery',
        description:
          'Own choices through implementation and release: integration decisions, optimisation, tests and participation in CI/CD.',
      },
      {
        title: 'Collaboration',
        description:
          'Coordinate technical work in small teams and communicate directly with customers where the role calls for it.',
      },
    ],
    posture:
      'Architecture is useful only when it makes the next change safer: decouple domains, share only what must be shared, migrate deliberately, and make complexity visible.',
    cv: 'The CV holds dates, education and the complete professional record.',
  },
  contactPage: {
    eyebrow: 'Contact / start here',
    title: 'Get in touch.',
    description: 'Choose a channel — both links work directly.',
    email: 'Send an email.',
    linkedin: 'Connect on LinkedIn.',
    practical: 'Practical details',
    location:
      'Hanau, Germany. Remote / international B2B. Authorized to work in Germany.',
    phone: 'Direct call',
    cv: 'Prefer the complete professional record first?',
  },
  language: {
    label: 'Change language',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    ua: 'Українська',
  },
  mobile: {
    open: 'Open navigation',
    close: 'Close navigation',
    available: 'Available for work',
  },
  hero: {
    label: 'Frontend architect',
    title: 'Building complex frontend systems that scale.',
    description:
      'Angular specialist with more than 11 years of experience in enterprise applications and team leadership.',
    viewWork: 'View my work',
    downloadCv: 'Download CV',
    cvLink: '/cv/Oleksandr_Koshevierov_CV_EN.pdf',
  },
  experience: { label: 'Experience', years: 'Years of experience' },
  availability: {
    label: 'Availability',
    title: 'Available for work',
    current: 'Currently available',
    schedule: 'Full-time · Remote',
    location: 'Germany',
  },
  project: {
    label: 'Featured Project',
    title: 'Positron Tracking System',
    description:
      'Real-time tracking of personnel and equipment in industrial environments.',
    cta: 'View case study',
    imageAlt: 'Mountain landscape representing the project',
  },
  tech: {
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
        items: ['Three.js', 'Leaflet', 'D3'],
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
    label: 'About Me',
    description:
      'I enjoy solving complex problems and turning ideas into reliable products people use.',
    cta: 'More about me',
  },
  industries: {
    label: 'Industries',
    items: ['Mining', 'Industrial', 'Retail', 'IoT', 'Energy'],
  },
  contact: { title: "Let's work together", cta: 'Contact me' },
  selected: {
    label: 'Selected Work',
    viewAll: 'View all projects',
    projects: [
      {
        title: 'HELIX Monitoring Platform',
        description:
          'Real-time monitoring and analytics system for mining operations with heat-time data visualization.',
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
        imageAlt: 'Industrial monitoring equipment',
      },
      {
        title: 'Boot Barn Portal',
        description:
          'Retail operations and financial planning platform for 150+ stores.',
        tags: ['Angular', '.NET', 'SQL'],
        imageAlt: 'Retail store interior',
      },
      {
        title: 'Universal Configurator',
        description:
          'Embeddable product configuration platform for partners and dealers.',
        tags: ['Angular', 'TypeScript', 'API'],
        imageAlt: 'Industrial production floor',
      },
    ],
  },
  education: {
    label: 'Education',
    degree: 'Master of Computer Science',
    university: 'V. N. Karazin Kharkiv National University',
    period: '2013 – 2015',
  },
  languages: {
    label: 'Languages',
    items: [
      { name: 'Ukrainian', level: 'Native' },
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'German', level: 'Intermediate' },
    ],
  },
  location: {
    title: 'Based in Germany',
    description: 'Open to new opportunities and exciting projects.',
  },
  footer: {
    copyright: 'Oleksandr Koshevierov.',
    rights: 'All rights reserved.',
    social: 'Social links',
  },
};
