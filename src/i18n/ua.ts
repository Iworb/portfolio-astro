import type { HomeI18n } from './types';

export const ua: HomeI18n = {
  meta: {
    title: 'Портфоліо',
    description: 'Портфоліо фронтенд-архітектора та розробника',
  },
  nav: {
    work: 'Проєкти',
    experience: 'Досвід',
    about: 'Про мене',
    blog: 'Блог',
    contact: 'Контакти',
  },
  language: {
    label: 'Змінити мову',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    ua: 'Українська',
  },
  mobile: {
    open: 'Відкрити навігацію',
    close: 'Закрити навігацію',
    available: 'Відкритий до пропозицій',
  },
  hero: {
    label: 'Фронтенд-архітектор',
    title: 'Створюю складні фронтенд-системи, які масштабуються.',
    description:
      'Спеціаліст з Angular із понад 10 роками досвіду в корпоративних застосунках і керуванні командами.',
    viewWork: 'Переглянути проєкти',
    downloadCv: 'Завантажити резюме',
    cvLink: '/cv/Oleksandr_Koshevierov_Resume_UA.pdf'
  },
  experience: { label: 'Досвід', years: 'Років досвіду' },
  availability: {
    label: 'Доступність',
    title: 'Відкритий до пропозицій',
    current: 'Зараз доступний',
    schedule: 'Повний день · Віддалено',
    location: 'Німеччина',
  },
  project: {
    label: 'Обраний проєкт',
    title: 'Positron Tracking System',
    description:
      'Система відстеження персоналу та обладнання в промисловому середовищі в реальному часі.',
    cta: 'Переглянути кейс',
    imageAlt: 'Гірський пейзаж як образ проєкту',
  },
  tech: {
    label: 'Технології',
    items: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Microfrontends',
      'Node.js',
      'AWS',
    ],
  },
  about: {
    label: 'Про мене',
    description:
      'Мені подобається розв’язувати складні задачі й перетворювати ідеї на надійні продукти, якими користуються люди.',
    cta: 'Дізнатися більше',
  },
  industries: {
    label: 'Галузі',
    items: ['Гірнича справа', 'Промисловість', 'Ритейл', 'IoT', 'Енергетика'],
  },
  contact: { title: 'Працюймо разом', cta: 'Зв’язатися зі мною' },
  selected: {
    label: 'Обрані роботи',
    viewAll: 'Усі проєкти',
    projects: [
      {
        title: 'HELIX Monitoring Platform',
        description:
          'Система моніторингу й аналітики для гірничодобувних підприємств із візуалізацією даних у реальному часі.',
        tags: ['Angular', 'Maps', 'RxJS', 'NgRx'],
        imageAlt: 'Промислове обладнання для моніторингу',
      },
      {
        title: 'Boot Barn Portal',
        description:
          'Платформа операційного управління та фінансового планування для понад 150 магазинів.',
        tags: ['Angular', '.NET', 'SQL'],
        imageAlt: 'Інтер’єр магазину',
      },
      {
        title: 'Universal Configurator',
        description:
          'Вбудовувана платформа конфігурації продуктів для партнерів і дилерів.',
        tags: ['Angular', 'TypeScript', 'API'],
        imageAlt: 'Промисловий виробничий цех',
      },
    ],
  },
  education: {
    label: 'Освіта',
    degree: 'Магістр комп’ютерних наук',
    university: 'Харківський національний університет імені В. Н. Каразіна',
    period: '2013 – 2015',
  },
  languages: {
    label: 'Мови',
    items: [
      { name: 'Українська', level: 'Рідна' },
      { name: 'Російська', level: 'Рідна' },
      { name: 'Англійська', level: 'Вільно' },
      { name: 'Німецька', level: 'Середній' },
    ],
  },
  location: {
    title: 'Базуюся в Німеччині',
    description: 'Відкритий до нових можливостей та цікавих проєктів.',
  },
  footer: {
    copyright: '© 2024 Oleksandr Koshevierov.',
    rights: 'Усі права захищені.',
    social: 'Посилання на соцмережі',
  },
};
