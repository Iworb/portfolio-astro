import type {I18nPageMeta} from "./I18nPageMeta.ts";
import type {I18nPageNav} from "./I18nPageNav.ts";
import type {I18nHomePage} from "./I18nHomePage.ts";
import type {I18nWorkPage} from "./I18nWorkPage.ts";
import type {I18nAboutPage} from "./I18nAboutPage.ts";
import type {I18nExperiencePage} from "./I18nExperiencePage.ts";
import type {I18nContactPage} from "./I18nContactPage.ts";

export interface I18n {
  meta: I18nPageMeta;
  nav: I18nPageNav;
  pages: {
    home: I18nHomePage;
    work: I18nWorkPage;
    about: I18nAboutPage;
    experience: I18nExperiencePage;
    contact: I18nContactPage;
  };
}
