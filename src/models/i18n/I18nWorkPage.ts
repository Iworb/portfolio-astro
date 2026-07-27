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
      tags: string[];
      featured?: boolean;
    }[];
  detail: {
    back: string;
    view: string;
    overview: string;
    signals: string;
    nda: string;
  };
  note: string;
}
