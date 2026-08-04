export interface I18nWorkPage {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    count: string;
  };
  projects: {
      slug: string;
      eyebrow: string;
      client: string;
      title: string;
      description: string;
      details?: string;
      tags: string[];
      technologies?: {
        category: string;
        items: {name: string; description: string}[];
      }[];
      brochure?: {label: string; url: string};
      featured?: boolean;
    }[];
  detail: {
    back: string;
    view: string;
    overview: string;
    technologyStack: string;
    gallery: string;
    nda: string;
  };
  note: string;
}
