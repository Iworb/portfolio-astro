import type { ComponentChildren, TargetedEvent } from 'preact';
import { themeKey } from '../../config/theme.ts';

interface Props {
  moon: ComponentChildren;
  sun: ComponentChildren;
}

export default function ThemeSwitcher({ moon, sun }: Props) {
  const saveTheme = (event: TargetedEvent<HTMLInputElement, Event>) => {
    localStorage.setItem(
      themeKey,
      event.currentTarget.checked ? 'night' : 'day',
    );
  };

  return (
    <label className="relative inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-base-300 bg-base-100 text-base-content transition-[border-color,background-color,color] duration-200 hover:border-base-content/60 focus-within:border-base-content/60">
      <input
        type="checkbox"
        className="theme-controller peer sr-only"
        value="night"
        aria-label="Change theme"
        onChange={saveTheme}
      />
      <span className="pointer-events-none absolute flex size-4 items-center justify-center transition-all duration-200 ease-out peer-checked:rotate-45 peer-checked:scale-75 peer-checked:opacity-0 motion-reduce:transition-none">
        {sun}
      </span>
      <span className="pointer-events-none absolute flex size-4 rotate-45 scale-75 items-center justify-center opacity-0 transition-all duration-200 ease-out peer-checked:rotate-0 peer-checked:scale-100 peer-checked:opacity-100 motion-reduce:transition-none">
        {moon}
      </span>
    </label>
  );
}
