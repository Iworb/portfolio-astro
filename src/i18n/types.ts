export type Locale = 'en' | 'de' | 'ru' | 'ua';

export interface ProjectI18n {
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
}

export interface WorkProjectI18n {
  slug: string;
  eyebrow: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface WorkI18n {
  eyebrow: string;
  title: string;
  description: string;
  count: string;
  projects: WorkProjectI18n[];
  detail: {
    back: string;
    view: string;
    overview: string;
    signals: string;
    nda: string;
  };
  note: string;
}

export interface AboutPageI18n {
  eyebrow: string;
  status: string;
  notice: string;
  title: string;
  description: string;
  note: string;
  prompts: string[];
}

export interface ExperienceAreaI18n {
  title: string;
  description: string;
}

export interface ExperiencePageI18n {
  eyebrow: string;
  title: string;
  description: string;
  practice: string;
  areas: ExperienceAreaI18n[];
  posture: string;
  cv: string;
}

export interface ContactPageI18n {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  practical: string;
  location: string;
  phone: string;
  cv: string;
}

export interface HomeI18n {
  meta: { title: string; description: string };
  nav: {
    work: string;
    experience: string;
    about: string;
    blog: string;
    contact: string;
  };
  work: WorkI18n;
  aboutPage: AboutPageI18n;
  experiencePage: ExperiencePageI18n;
  contactPage: ContactPageI18n;
  language: {
    label: string;
    en: string;
    de: string;
    ru: string;
    ua: string;
  };
  mobile: { open: string; close: string; available: string };
  hero: {
    label: string;
    title: string;
    description: string;
    viewWork: string;
    downloadCv: string;
    cvLink: string;
  };
  experience: { label: string; years: string };
  availability: {
    label: string;
    title: string;
    current: string;
    schedule: string;
    location: string;
  };
  project: {
    label: string;
    title: string;
    description: string;
    cta: string;
    imageAlt: string;
  };
  tech: { label: string; items: string[] };
  about: { label: string; description: string; cta: string };
  industries: { label: string; items: string[] };
  contact: { title: string; cta: string };
  selected: { label: string; viewAll: string; projects: ProjectI18n[] };
  education: {
    label: string;
    degree: string;
    university: string;
    period: string;
  };
  languages: {
    label: string;
    items: { name: string; level: string }[];
  };
  location: { title: string; description: string };
  footer: {
    copyright: string;
    rights: string;
    social: string;
  };
}
