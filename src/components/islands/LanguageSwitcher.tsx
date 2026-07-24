import type { ComponentChildren } from 'preact';
import type { Locale } from '../../i18n/types';

interface Props {
  chevron: ComponentChildren;
  locale: Locale;
  labels: {
    label: string;
    en: string;
    de: string;
    ru: string;
    ua: string;
  };
}

export default function LanguageSwitcher({ chevron, locale, labels }: Props) {
  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost gap-1 px-2"
        aria-label={labels.label}>
        {locale.toUpperCase()}

        {chevron}
      </button>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 mt-3 w-36 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
        <li>
          <a href="/en">{labels.en}</a>
        </li>

        <li>
          <a href="/de">{labels.de}</a>
        </li>

        <li>
          <a href="/ru">{labels.ru}</a>
        </li>

        <li>
          <a href="/ua">{labels.ua}</a>
        </li>
      </ul>
    </div>
  );
}
