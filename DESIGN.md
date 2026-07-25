---
version: alpha
name: Signal Bento
description: "A high-density portfolio system for a frontend architect: calm neutral surfaces, modular hierarchy, one acid-lime action color, and equal light/dark themes."
colors:
  canvas-light: "#F4F5F2"
  surface-light: "#FFFFFF"
  ink-light: "#141614"
  muted-light: "#676B66"
  line-light: "#DADDD7"
  canvas-dark: "#151714"
  surface-dark: "#1E211D"
  ink-dark: "#F2F5ED"
  muted-dark: "#A8ADA3"
  line-dark: "#383D36"
  primary: "#D9FF4A"
  action-ink: "#171B15"
  supporting-light: "#27634D"
  supporting-dark: "#8EE3B3"
typography:
  display:
    fontFamily: Manrope
    fontSize: 5.5rem
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.075em"
  heading-lg:
    fontFamily: Manrope
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.05em"
  body-lg:
    fontFamily: Manrope
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: DM Mono
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  control: 10px
  card: 18px
  pill: 999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 14px
  5: 18px
  6: 22px
  7: 24px
  8: 32px
  9: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.action-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.control}"
    padding: 14px
  button-secondary-light:
    backgroundColor: "{colors.ink-light}"
    textColor: "{colors.surface-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.control}"
    padding: 14px
  button-secondary-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.control}"
    padding: 14px
  card-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.card}"
    padding: 24px
  tag-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.muted-light}"
    rounded: "{rounded.pill}"
    padding: 6px
  tag-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-dark}"
    rounded: "{rounded.pill}"
    padding: 6px
  page-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
  page-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.ink-dark}"
  divider-light:
    backgroundColor: "{colors.line-light}"
    height: 1px
  divider-dark:
    backgroundColor: "{colors.line-dark}"
    height: 1px
  artwork-light:
    backgroundColor: "{colors.supporting-light}"
  artwork-dark:
    backgroundColor: "{colors.supporting-dark}"
---

## Overview

**Signal Bento** is a personal-portfolio system for a frontend architect. Its primary surface is **Decide / Learn**: a visitor needs to understand the person's value, see credible work, and either download a résumé or begin a conversation.

The page works as a modular briefing rather than a conventional marketing funnel. It is compact and legible, built from a responsive 12-column bento grid on desktop and a deliberately ordered single-column sequence on mobile. Cards earn their space by carrying a specific proof point: role, availability, selected work, expertise, or the résumé action.

The emotional posture is calm competence: precise, approachable, practical. Avoid generic SaaS decoration, heavy shadows, glass effects, dashboards with invented metrics, and gradients used only as ornament.

## Colors

Use the semantic pair that corresponds to the active theme; do not invert a component without also changing its text, muted text, and border tokens.

- **Light canvas / surface:** `{colors.canvas-light}` and `{colors.surface-light}` form a warm-cool near-neutral background with visible card separation.
- **Dark canvas / surface:** `{colors.canvas-dark}` and `{colors.surface-dark}` preserve depth through a small, deliberate contrast step rather than black-on-charcoal.
- **Ink:** `{colors.ink-light}` and `{colors.ink-dark}` carry all primary reading and headings.
- **Muted:** `{colors.muted-light}` and `{colors.muted-dark}` are reserved for supporting body copy, metadata and tags; never use them for primary actions.
- **Lines:** `{colors.line-light}` and `{colors.line-dark}` define cards and controls with one-pixel, low-emphasis boundaries.
- **Action:** `{colors.primary}` is the only saturated action surface. Use it for primary résumé downloads and the availability block. Pair it exclusively with `{colors.action-ink}`.
- **Supporting green:** `{colors.supporting-light}` and `{colors.supporting-dark}` may appear in restrained artwork or status details, but never compete with the action color.

## Typography

Use **Manrope** for all reading hierarchy and **DM Mono** only for compact metadata, category labels and system-like indicators.

- `display` is left-aligned and limited to the personal proposition. It may be responsive using `clamp(2.75rem, 6vw, 5.5rem)`; preserve the tight tracking and 0.94 line-height.
- `heading-lg` is for project and résumé-card headlines. It is not a secondary display style.
- `body-lg` is for the one-sentence value proposition; `body-md` is for all supporting copy.
- `label` is uppercase. Keep copy short, use its tracking as a structural cue, and do not use it for paragraphs.

Do not default to a generic system font, apply all-caps to headings, or center text merely to fill a card.

## Layout

Desktop uses a 12-column grid with a 14px gap and a maximum content width of 1440px. The outer shell has 22px breathing room.

- Hero: 7 columns; availability signal: 5 columns.
- Featured work: 8 columns; résumé summary: 4 columns.
- A thin full-width strip can carry concise skills, language or footer information.
- Cards need distinct visual weights. Vary spans and height according to the importance of their content; avoid equal-sized feature grids.
- At 760px and below, stack cards in the semantic sequence: hero, availability, featured work, résumé, footer. Keep at least 14px between modules and reduce shell padding to 14px.
- Buttons and theme controls must preserve a 44px minimum touch target on small screens.

## Elevation & Depth

Depth comes from canvas/surface contrast and the one-pixel line token only. Cards cast no default shadow. On hover, a work card may shift upward by no more than 2px while its border gains emphasis; never add blur or a glossy glow.

## Shapes

Cards use `{rounded.card}`. Primary and secondary buttons use `{rounded.control}`. Tags and compact theme controls use `{rounded.pill}` where a fully rounded shape improves scanning.

Do not make every container pill-shaped. Large cards retain their rounded rectangle so hierarchy comes from layout and typography rather than novelty.

## Components

- **Primary button:** `button-primary` is reserved for “Download résumé” and the equivalent high-intent action. It should appear in the hero and, at most, one supporting résumé card.
- **Secondary button:** use the theme-specific `button-secondary-*` component for “Start a conversation”. It is clear but visually subordinate to the résumé action.
- **Card:** use the theme-specific `card-*` component. Every card includes enough internal whitespace to make its content scannable; it must not become an empty decorative box.
- **Availability card:** can use `{colors.primary}` as its surface with `{colors.action-ink}` text. It is a distinct signal block, not a generic success alert.
- **Tag:** use the theme-specific `tag-*` component for technology and metadata. Tags support scanning; do not use them to repeat the same content already present in the headline.
- **Theme control:** compact, outlined, pill-shaped and explicit. The light and dark modes are first-class states rather than an afterthought.

## Do's and Don'ts

**Do**
- Make the résumé download and contact action discoverable within the first viewport.
- Use real work, availability and technology information as proof points.
- Let grid spans, type scale and whitespace establish hierarchy.
- Treat dark mode as a separately tuned palette with equivalent legibility.
- Support keyboard focus with a clear outline that meets the action-color contrast posture.

**Don't**
- Add a blue/purple gradient, glass panels, soft floating shadows or icon-topped feature tiles.
- Turn every section into a same-sized card grid.
- Use fake counters, invented testimonials or arbitrary dashboard metrics.
- Use the acid action color for paragraph text or multiple competing actions.
- Collapse the mobile design into a tiny desktop grid; maintain the intended vertical reading order.
