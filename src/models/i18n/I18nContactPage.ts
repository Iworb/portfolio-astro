export interface I18nContactPage {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  email: {
    label: string;
    address: string;
  };
  linkedin: {
    label: string;
    action: string;
  };
  details: {
    location: { label: string; description: string };
    phone: { label: string; number: string; action: string };
    cv: { label: string; description: string; action: string };
  };
}
