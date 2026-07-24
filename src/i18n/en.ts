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
      'Angular specialist with 10+ years of experience in enterprise applications and team leadership.',
    viewWork: 'View my work',
    downloadCv: 'Download CV',
    cvLink: '/cv/Oleksandr_Koshevierov_CV_EN.pdf'
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
    label: 'Tech Stack',
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
        tags: ['Angular', 'Maps', 'RxJS', 'NgRx'],
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
    copyright: '© 2024 Oleksandr Koshevierov.',
    rights: 'All rights reserved.',
    social: 'Social links',
  },
};
