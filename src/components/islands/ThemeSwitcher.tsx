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
    <label
      className="btn btn-square btn-ghost relative"
      aria-label="Change theme">
      <input
        type="checkbox"
        className="theme-controller peer sr-only"
        value="night"
        aria-label="Change theme"
        onChange={saveTheme}
      />
      <span className="pointer-events-none absolute left-1/2 top-1/2 flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-200 peer-checked:rotate-45 peer-checked:scale-75 peer-checked:opacity-0">
        {sun}
      </span>
      <span className="pointer-events-none absolute left-1/2 top-1/2 flex size-5 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-75 items-center justify-center opacity-0 transition-all duration-200 peer-checked:rotate-0 peer-checked:scale-100 peer-checked:opacity-100">
        {moon}
      </span>
    </label>
  );
}
