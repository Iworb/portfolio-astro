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
  pathSuffix?: string;
}

export default function LanguageSwitcher({
  chevron,
  locale,
  labels,
  pathSuffix = '',
}: Props) {
  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-base-300 bg-base-100 px-3 font-mono text-[0.6875rem] font-medium tracking-[0.08em] text-base-content transition-[border-color,background-color,color] duration-200 hover:border-base-content/60 focus:border-base-content/60"
        aria-label={labels.label}>
        {locale.toUpperCase()}
        <span className="flex size-3.5 items-center justify-center">
          {chevron}
        </span>
      </button>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 mt-2 w-40 rounded-box border border-base-300 bg-base-100 p-1.5 font-mono text-[0.6875rem] font-medium tracking-[0.05em] shadow-none">
        <li>
          <a href={`/en${pathSuffix}`} className="rounded-lg px-3 py-2.5">
            {labels.en}
          </a>
        </li>
        <li>
          <a href={`/de${pathSuffix}`} className="rounded-lg px-3 py-2.5">
            {labels.de}
          </a>
        </li>
        <li>
          <a href={`/ru${pathSuffix}`} className="rounded-lg px-3 py-2.5">
            {labels.ru}
          </a>
        </li>
        <li>
          <a href={`/ua${pathSuffix}`} className="rounded-lg px-3 py-2.5">
            {labels.ua}
          </a>
        </li>
      </ul>
    </div>
  );
}
