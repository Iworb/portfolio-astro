export interface I18nHomePage {
  hero: {
      cta: string;
      cvLink: string;
      description: string;
      downloadCv: string;
      label: string;
      title: string;
      viewWork: string;
  };
  availability: {
      label: string;
      title: string;
      current: string;
      schedule: string;
      location: string;
      note: string;
  };
  resume: { label: string; years: string; download: string };
  featuredWork: {
      label: string;
      viewAll: string;
      eyebrow: string;
      title: string;
      description: string;
      tags: string[];
  };
  project: {
    label: string;
    title: string;
    description: string;
    cta: string;
    imageAlt: string;
  };
  skills: {
      label: string;
      title: string;
      groups: { icon: string; label: string; items: string[] }[];
  };
  approach: {
      label: string;
      title: string;
      description: string;
      cta: string;
  };
}
