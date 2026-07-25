# Final cross-page review — Signal Bento

**Scope reviewed:** Home v4, Work v2, Experience v2, About v2, Contact v3.

## Result

The five page types now have distinct jobs and can move to Astro implementation after the small implementation-level safeguards below are included. No additional case-study pages are part of the approved site map.

## Page roles

| Page | Primary job | Review outcome |
|---|---|---|
| Home | Establish positioning and offer the two primary paths: CV / contact. | Keep the portrait as a desktop-only layer inside the hero. |
| Work | Show the selected systems and architectural proof. | Keep HELIX → Merchandise Planning → Positron → Internal integration portal order; retain NDA-safe public wording. |
| Experience | Explain operating model, responsibility and professional maturity. | v2 correctly avoids project names and must not be turned back into a project list. |
| About | Give a lighter, human impression. | Preserve the informal collage direction; all current fictional text must be replaced by approved personal copy before publication. |
| Contact | Let visitors act immediately. | v3 is accepted: direct `mailto:` email card first, LinkedIn card second, then practical details. |

## System consistency

### Passed

- **Signal Bento tokens:** `DESIGN.md` linted successfully: 0 errors, 0 warnings.
- **Palette and type posture:** calm neutral canvas/surfaces, Manrope + DM Mono, thin border hierarchy and one lime action color are consistently present.
- **Themes:** every reviewed prototype has a persisted light/dark theme control.
- **Language affordance:** every reviewed prototype presents `EN / DE / UA / RU` in the header.
- **No Blog:** static inspection found no Blog surface or navigation entry in the approved prototypes.
- **Mobile portrait rule:** Home v4 contains the required mobile rule that hides `.hero-portrait`.
- **Main CTA routes:** all local CV links resolve to the existing EN PDF; Contact v3 uses direct `mailto:` and LinkedIn routes.

### Intentional differences

- Home and Work may use the larger display treatment because they introduce positioning/proof.
- Experience uses a quieter professional-proposition headline.
- About uses a deliberately more playful collage and personal-note voice.
- Contact uses the smallest, action-led introduction (`Get in touch.`) and lets its cards carry hierarchy.

## Required implementation safeguards

These are not requests for another prototype revision; they are production requirements for the Astro phase.

1. **Real routing:** replace prototype `#` navigation with Astro page routes and show the active page semantically (`aria-current="page"`).
2. **Real localization:** the current language menus are visual only. Implement translations and language-aware routes/content before treating the menu as functional. Decide whether non-English locales get translated CV files or an explicit EN-CV fallback.
3. **Keyboard visibility:** all production interactive controls need a visible `:focus-visible` state. The static prototypes do not consistently define one.
4. **Motion safety:** preserve Home/Work reduced-motion handling and add it consistently to Experience, About and Contact wherever hover/transition motion remains.
5. **About copy gate:** retain the prototype notice only during design review. Before launch, replace all fictional personal notes with text approved by O. Koshevierov; do not publish the placeholders.
6. **Contact action hierarchy:** keep email as the primary full-card `mailto:` action, LinkedIn as the second full-card external action, and prevent clipboard copying from becoming the primary interaction again.
7. **Work NDA gate:** use Master Profile-only public claims; do not add metrics, client details, product screens or names beyond the agreed public wording.
8. **Prototype cleanup:** remove unused prototype-only CSS/JS when turning Contact v3 into production components.

## Static verification record

- Each reviewed HTML document parsed successfully.
- All examined local CV links resolve.
- `DESIGN.md` validation completed with 0 errors and 0 warnings.
- Browser screenshot/interaction review was not available in this environment; final Astro work must be built and exercised in the browser when the renderer is available.

## Implementation baseline

- Site map: Home, Work, Experience, About, Contact.
- Blog: excluded.
- Case-study detail routes: excluded for now.
- Public name: `O. Koshevierov`.
- Design system: Signal Bento.
