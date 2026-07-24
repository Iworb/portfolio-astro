export type Locale = 'en' | 'de' | 'ru' | 'ua';

export interface ProjectI18n {
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
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
