import { useEffect, useState } from 'preact/hooks';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        class="btn btn-square btn-ghost btn-sm"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}>
        <span class="text-xl" aria-hidden="true">
          ☰
        </span>
      </button>

      <div
        class={[
          'fixed inset-0 z-50 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!open}>
        <button
          type="button"
          class={[
            'absolute inset-0 bg-black/40 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-navigation"
          class={[
            'absolute inset-y-0 left-0 w-[min(86vw,22rem)]',
            'border-r border-base-300 bg-base-100 p-5',
            'transition-transform duration-300',
            open ? 'translate-x-0' : '-translate-x-full',
          ].join(' ')}>
          <div class="flex items-center justify-between">
            <span class="text-xl font-black">OK</span>

            <button
              type="button"
              class="btn btn-square btn-ghost btn-sm"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <nav class="mt-10" aria-label="Mobile navigation">
            <ul class="menu gap-2 p-0 text-lg">
              {navigation.map(item => (
                <li>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
