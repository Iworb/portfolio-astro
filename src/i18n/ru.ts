import type { I18n } from '../models';

export const ru: I18n = {
  meta: {
    title: 'Портфолио',
    description: 'Портфолио фронтенд-архитектора и разработчика',
  },
  nav: {
    footer: {
      copyright: 'Oleksandr Koshevierov',
      nameShort: 'OK',
      rights: 'Все права защищены',
      social: 'Ссылки на соцсети',
    },
    header: {
      aria: { close: 'Закрыть навигацию', open: 'Открыть навигацию' },
      language: {
        label: 'Изменить язык',
        en: 'English',
        de: 'Deutsch',
        ru: 'Русский',
        ua: 'Українська',
      },
      about: 'Обо мне',
      available: 'Открыт к предложениям',
      contact: 'Контакты',
      cta: 'Связаться со мной',
      experience: 'Опыт',
      name: 'O. Koshevierov',
      work: 'Проекты',
    },
  },
  pages: {
    home: {
      hero: {
        cta: 'Связаться со мной',
        cvLink: '/cv/Oleksandr_Koshevierov_Resume_RU.pdf',
        description:
          'Специалист по Angular с опытом более 11 лет в корпоративных приложениях и руководстве командами.',
        downloadCv: 'Скачать резюме',
        label: 'Фронтенд-архитектор',
        title: 'Создаю сложные фронтенд-системы, которые масштабируются.',
        viewWork: 'Смотреть проекты',
      },
      availability: {
        label: 'Доступность',
        title: 'Открыт к предложениям',
        current: 'Сейчас доступен',
        schedule: 'Полный день · Удалённо',
        location: 'Германия',
        note: 'Открыт для подходящего проекта',
      },
      resume: {
        label: 'Резюме',
        years: '11+',
        details: 'лет опыта в создании Frontend систем',
        download: 'Скачать PDF',
      },
      featuredWork: {
        slug: 'helix',
        label: 'Избранные работы',
        viewAll: 'Все проекты',
        eyebrow: 'Избранная система / 01',
        title: 'HELIX Monitoring Platform',
        description:
          'Система мониторинга и аналитики для горнодобывающих предприятий.',
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
      },
      project: {
        label: 'Избранный проект',
        title: 'Positron Tracking System',
        description:
          'Система отслеживания сотрудников и оборудования в промышленной среде.',
        cta: 'Смотреть кейс',
        imageAlt: 'Горный пейзаж как образ проекта',
      },
      skills: {
        label: 'Технологии',
        title: 'Инструменты для разработки и развития frontend-систем.',
        groups: [
          {
            icon: 'lucide:panels-top-left',
            label: 'Frontend',
            items: ['Angular', 'React', 'Vue', 'TypeScript'],
          },
          {
            icon: 'lucide:boxes',
            label: 'State и архитектура',
            items: ['RxJS', 'NgRx', 'Microfrontends'],
          },
          {
            icon: 'lucide:chart-no-axes-combined',
            label: 'Визуализация',
            items: ['Three.js', 'Leaflet', 'D3', 'Chart.js'],
          },
          {
            icon: 'lucide:smartphone',
            label: 'Кроссплатформенная разработка',
            items: ['Flutter'],
          },
          {
            icon: 'lucide:wrench',
            label: 'Инструменты и delivery',
            items: [
              'Node.js',
              'Webpack',
              'Vite',
              'Git',
              'GitHub Actions',
              'Cypress',
              'Playwright',
              'AWS',
              'Azure',
              'CI/CD',
            ],
          },
        ],
      },
      approach: {
        label: 'Как я работаю',
        title: 'Я привношу ясность в сложную фронтенд-разработку.',
        description:
          'Мне нравится решать сложные задачи и превращать идеи в надёжные продукты, которыми пользуются люди.',
        cta: 'Связаться со мной',
      },
    },
    work: {
      hero: {
        eyebrow: 'Избранные системы / 2018—сейчас',
        title: 'Архитектура для систем, которые должны выдерживать нагрузку.',
        description: 'Отобранные B2B-фронтенд-проекты.',
        count: '04 избранные системы',
      },
      projects: [
        {
          slug: 'helix',
          eyebrow: 'Ключевая система / 01',
          client: 'MST Global',
          title: 'HELIX',
          description:
            'Платформа мониторинга горных работ открытым и подземным способом.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Карты и визуализация'],
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Ключевая система / 02',
          client: 'Boot Barn',
          title: 'Приложение для планирования ассортимента',
          description: 'Приложение для бюджетирования товарных категорий.',
          tags: ['Angular', 'NgRx', 'TreeGrid'],
        },
        {
          slug: 'positron',
          eyebrow: 'Избранная система / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'IoT-мониторинг датчиков, устройств и их состояний на карте.',
          tags: [
            'AngularJS',
            'Angular',
            'Microapps',
            'Shared library',
            'IoT-карты',
          ],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Избранная система / 04',
          client: 'Boot Barn',
          title: 'Внутренний портал интеграций',
          description:
            'Приложения для мониторинга состояния корпоративных интеграций.',
          tags: ['Angular', 'NgRx', 'Microapps', 'Shared library'],
        },
      ],
      detail: {
        back: 'Все системы',
        view: 'Открыть систему',
        overview: 'Обзор системы',
        signals: 'Архитектурные акценты',
        nda: 'На этой странице отражён только согласованный публичный объём в рамках NDA.',
      },
      note: 'Иерархия проектов следует подтверждённому Master Profile.',
    },
    about: {
      hero: {
        eyebrow: 'Обо мне / личные заметки',
        title: 'Где-то между любопытством и вниманием к деталям.',
        description:
          'Это намеренно вымышленный черновик для проверки голоса, ритма и композиции.',
      },
      placeholder: {
        status: 'Вымышленный текст-заглушка',
        notice:
          'Перед публикацией заменить собственными словами O. Koshevierov.',
      },
      note: 'Финальная страница будет содержать короткое человеческое представление.',
      prompts: [
        '[хобби]',
        '[актуальный интерес]',
        '[город / место]',
        '[любимая маленькая вещь]',
      ],
    },
    experience: {
      hero: {
        eyebrow: 'Опыт / модель работы',
        title: 'Как я работаю, когда система оказывается сложной.',
        description:
          'Не список проектов, а взгляд на ответственность, решения и рабочий контекст за портфолио.',
      },
      practice: {
        label: 'Постоянная практика',
        description:
          'Независимая фронтенд-практика с 02/2015: более 11 лет веб-разработки и около 8 лет архитектуры Angular/AngularJS.',
      },
      areas: [
        {
          title: 'Архитектура',
          description:
            'Давать сложным фронтендам структуру, которая поддерживает изменения.',
        },
        {
          title: 'Данные и интерфейс',
          description: 'Делать сложную информацию удобной на клиенте.',
        },
        {
          title: 'Delivery',
          description: 'Отвечать за решения через реализацию и релиз.',
        },
        {
          title: 'Совместная работа',
          description:
            'Координировать техническую работу в небольших командах.',
        },
      ],
      posture: {
        label: 'Техническая позиция',
        description:
          'Архитектура полезна только тогда, когда делает следующее изменение безопаснее.',
      },
      chronology: {
        label: 'Полная хронология',
        description:
          'В резюме собраны даты, образование и полная профессиональная история.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Контакты / начало',
        title: 'Давайте на связи.',
        description: 'Выберите канал — обе ссылки работают напрямую.',
      },
      email: { label: 'Написать email.', address: 'iworb.ne@gmail.com' },
      linkedin: { label: 'Связаться в LinkedIn.', action: 'Открыть LinkedIn' },
      details: {
        location: {
          label: 'Место и формат',
          description:
            'Ханау, Германия. Remote / международные B2B-проекты. Есть право на работу в Германии.',
        },
        phone: {
          label: 'Телефон',
          number: '+49 151 72585876',
          action: 'Позвонить напрямую',
        },
        cv: {
          label: 'Резюме',
          description:
            'Хотите сначала ознакомиться с полной профессиональной историей?',
          action: 'Скачать резюме',
        },
      },
    },
  },
};
