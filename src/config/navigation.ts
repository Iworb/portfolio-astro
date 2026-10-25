export interface NavigationItem {
  label: string;
  href: string;
}

const base = import.meta.env.BASE_URL;

export const navigation: NavigationItem[] = [
  {
    label: 'Work',
    href: `${base}/work`,
  },
  {
    label: 'Experience',
    href: `${base}/experience`,
  },
  {
    label: 'About',
    href: `${base}/about`,
  },
  {
    label: 'Blog',
    href: `${base}/blog`,
  },
  {
    label: 'Contact',
    href: `${base}/contact`,
  },
];
