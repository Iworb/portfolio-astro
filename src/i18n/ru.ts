import type { HomeI18n } from './types';

export const ru: HomeI18n = {
  meta: {
    title: 'Портфолио',
    description: 'Портфолио фронтенд-архитектора и разработчика',
  },
  nav: {
    work: 'Проекты',
    experience: 'Опыт',
    about: 'Обо мне',
    blog: 'Блог',
    contact: 'Контакты',
  },
  language: {
    label: 'Изменить язык',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    ua: 'Українська',
  },
  mobile: {
    open: 'Открыть навигацию',
    close: 'Закрыть навигацию',
    available: 'Открыт к предложениям',
  },
  hero: {
    label: 'Фронтенд-архитектор',
    title: 'Создаю сложные фронтенд-системы, которые масштабируются.',
    description:
      'Специалист по Angular с опытом более 10 лет в корпоративных приложениях и руководстве командами.',
    viewWork: 'Смотреть проекты',
    downloadCv: 'Скачать резюме',
    cvLink: '/cv/Oleksandr_Koshevierov_Resume_RU.pdf'
  },
  experience: { label: 'Опыт', years: 'Лет опыта' },
  availability: {
    label: 'Доступность',
    title: 'Открыт к предложениям',
    current: 'Сейчас доступен',
    schedule: 'Полный день · Удалённо',
    location: 'Германия',
  },
  project: {
    label: 'Избранный проект',
    title: 'Positron Tracking System',
    description:
      'Система отслеживания сотрудников и оборудования в промышленной среде в реальном времени.',
    cta: 'Смотреть кейс',
    imageAlt: 'Горный пейзаж как образ проекта',
  },
  tech: {
    label: 'Технологии',
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
    label: 'Обо мне',
    description:
      'Мне нравится решать сложные задачи и превращать идеи в надёжные продукты, которыми пользуются люди.',
    cta: 'Узнать больше',
  },
  industries: {
    label: 'Отрасли',
    items: ['Горная добыча', 'Промышленность', 'Ритейл', 'IoT', 'Энергетика'],
  },
  contact: { title: 'Давайте работать вместе', cta: 'Связаться со мной' },
  selected: {
    label: 'Избранные работы',
    viewAll: 'Все проекты',
    projects: [
      {
        title: 'HELIX Monitoring Platform',
        description:
          'Система мониторинга и аналитики для горнодобывающих предприятий с визуализацией данных в реальном времени.',
        tags: ['Angular', 'Maps', 'RxJS', 'NgRx'],
        imageAlt: 'Промышленное оборудование мониторинга',
      },
      {
        title: 'Boot Barn Portal',
        description:
          'Платформа операционного управления и финансового планирования для более чем 150 магазинов.',
        tags: ['Angular', '.NET', 'SQL'],
        imageAlt: 'Интерьер магазина',
      },
      {
        title: 'Universal Configurator',
        description:
          'Встраиваемая платформа конфигурации продуктов для партнёров и дилеров.',
        tags: ['Angular', 'TypeScript', 'API'],
        imageAlt: 'Промышленный производственный цех',
      },
    ],
  },
  education: {
    label: 'Образование',
    degree: 'Магистр компьютерных наук',
    university: 'Харьковский национальный университет имени В. Н. Каразина',
    period: '2013 – 2015',
  },
  languages: {
    label: 'Языки',
    items: [
      { name: 'Украинский', level: 'Родной' },
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'Свободно' },
      { name: 'Немецкий', level: 'Средний' },
    ],
  },
  location: {
    title: 'Живу в Германии',
    description: 'Открыт к новым возможностям и интересным проектам.',
  },
  footer: {
    copyright: '© 2024 Oleksandr Koshevierov.',
    rights: 'Все права защищены.',
    social: 'Ссылки на соцсети',
  },
};
