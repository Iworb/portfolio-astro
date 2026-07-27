import type { I18n } from '../models';

export const ua: I18n = {
  meta: {
    title: 'Портфоліо',
    description: 'Портфоліо фронтенд-архітектора та розробника',
  },
  nav: {
    footer: {
      copyright: 'Oleksandr Koshevierov.',
      nameShort: 'OK',
      rights: 'Усі права захищені.',
      social: 'Посилання на соцмережі',
    },
    header: {
      aria: { close: 'Закрити навігацію', open: 'Відкрити навігацію' },
      language: {
        label: 'Змінити мову',
        en: 'English',
        de: 'Deutsch',
        ru: 'Русский',
        ua: 'Українська',
      },
      about: 'Про мене',
      available: 'Відкритий до пропозицій',
      contact: 'Контакти',
      cta: 'Зв’язатися зі мною',
      experience: 'Досвід',
      name: 'O. Koshevierov',
      work: 'Проєкти',
    },
  },
  pages: {
    home: {
      hero: {
        cta: 'Зв’язатися зі мною',
        cvLink: '/cv/Oleksandr_Koshevierov_Resume_UA.pdf',
        description:
          'Спеціаліст з Angular із понад 11 роками досвіду в корпоративних застосунках і керуванні командами.',
        downloadCv: 'Завантажити резюме',
        label: 'Фронтенд-архітектор',
        title: 'Створюю складні фронтенд-системи, які масштабуються.',
        viewWork: 'Переглянути проєкти',
      },
      availability: {
        label: 'Доступність',
        title: 'Відкритий до пропозицій',
        current: 'Зараз доступний',
        schedule: 'Повний день · Віддалено',
        location: 'Німеччина',
        note: 'Відкритий до відповідного проєкту',
      },
      resume: { label: 'Резюме', years: '11+', download: 'Завантажити PDF' },
      featuredWork: {
        label: 'Обрані роботи',
        viewAll: 'Усі проєкти',
        eyebrow: 'Обрана система / 01',
        title: 'HELIX Monitoring Platform',
        description:
          'Система моніторингу й аналітики для гірничодобувних підприємств.',
        tags: ['Angular', 'RxJS', 'NgRx', 'Three.js', 'Leaflet', 'D3'],
      },
      project: {
        label: 'Обраний проєкт',
        title: 'Positron Tracking System',
        description:
          'Система відстеження персоналу та обладнання в промисловому середовищі.',
        cta: 'Переглянути кейс',
        imageAlt: 'Гірський пейзаж як образ проєкту',
      },
      skills: {
        label: 'Технології',
        title: 'Інструменти для розробки й розвитку frontend-систем.',
        groups: [
          {
            icon: 'lucide:panels-top-left',
            label: 'Frontend',
            items: ['Angular', 'React', 'Vue', 'TypeScript'],
          },
          {
            icon: 'lucide:boxes',
            label: 'State і архітектура',
            items: ['RxJS', 'NgRx', 'Microfrontends'],
          },
          {
            icon: 'lucide:chart-no-axes-combined',
            label: 'Візуалізація',
            items: ['Three.js', 'Leaflet', 'D3'],
          },
          {
            icon: 'lucide:smartphone',
            label: 'Кросплатформна розробка',
            items: ['Flutter'],
          },
          {
            icon: 'lucide:wrench',
            label: 'Інструменти й delivery',
            items: [
              'Node.js',
              'Vite',
              'Git',
              'GitHub Actions',
              'Cypress',
              'AWS',
              'CI/CD',
            ],
          },
        ],
      },
      approach: {
        label: 'Як я працюю',
        title:
          'Складність заслуговує на спокійний інтерфейс і спокійний процес delivery.',
        description:
          'Мені подобається розв’язувати складні задачі й перетворювати ідеї на надійні продукти, якими користуються люди.',
        cta: 'Зв’язатися зі мною',
      },
    },
    work: {
      hero: {
        eyebrow: 'Обрані системи / 2018—дотепер',
        title: 'Архітектура для систем, що мають витримувати навантаження.',
        description: 'Добірка B2B-фронтенд-проєктів.',
        count: '04 обрані системи',
      },
      projects: [
        {
          slug: 'helix',
          eyebrow: 'Ключова система / 01',
          client: 'MST Global',
          title: 'HELIX',
          description:
            'Платформа моніторингу відкритих і підземних гірничих робіт.',
          tags: [
            'Angular 7–22',
            'Microapps',
            'Shared library',
            'Карти й візуалізація',
          ],
          featured: true,
        },
        {
          slug: 'merchandise-planning',
          eyebrow: 'Ключова система / 02',
          client: 'Boot Barn',
          title: 'Застосунок для планування асортименту',
          description: 'Застосунок для бюджетування товарних категорій.',
          tags: ['Angular', 'NgRx', 'TreeGrid', 'Cypress'],
        },
        {
          slug: 'positron',
          eyebrow: 'Обрана система / 03',
          client: 'iQuipsys',
          title: 'Positron',
          description:
            'IoT-моніторинг датчиків, пристроїв та їхніх станів на мапі.',
          tags: ['AngularJS', 'Angular 6', 'Microapps', 'IoT-мапи'],
        },
        {
          slug: 'integration-portal',
          eyebrow: 'Обрана система / 04',
          client: 'Boot Barn',
          title: 'Внутрішній портал інтеграцій',
          description:
            'Застосунки для моніторингу стану корпоративних інтеграцій.',
          tags: ['Angular 11', 'TypeScript', 'Microapps', 'Shared libraries'],
        },
      ],
      detail: {
        back: 'Усі системи',
        view: 'Відкрити систему',
        overview: 'Огляд системи',
        signals: 'Архітектурні акценти',
        nda: 'На цій сторінці відображено лише погоджений публічний обсяг у межах NDA.',
      },
      note: 'Ієрархія проєктів відповідає підтвердженому Master Profile.',
    },
    about: {
      hero: {
        eyebrow: 'Про мене / особисті нотатки',
        title: 'Десь між цікавістю й увагою до деталей.',
        description:
          'Це навмисно вигадана чернетка для перевірки голосу, ритму та композиції.',
      },
      placeholder: {
        status: 'Вигаданий текст-заглушка',
        notice: 'Перед публікацією замінити власними словами O. Koshevierov.',
      },
      note: 'Фінальна сторінка міститиме коротке людяне представлення.',
      prompts: [
        '[хобі]',
        '[поточна цікавість]',
        '[місто / місце]',
        '[улюблена маленька річ]',
      ],
    },
    experience: {
      hero: {
        eyebrow: 'Досвід / модель роботи',
        title: 'Як я працюю, коли система виявляється складною.',
        description:
          'Не перелік проєктів, а погляд на відповідальність, рішення та робочий контекст за портфоліо.',
      },
      practice: {
        label: 'Постійна практика',
        description:
          'Незалежна фронтенд-практика з 02/2015: понад 11 років веброзробки та близько 8 років архітектури Angular/AngularJS.',
      },
      areas: [
        {
          title: 'Архітектура',
          description:
            'Давати складним фронтендам структуру, що підтримує зміни.',
        },
        {
          title: 'Дані й інтерфейс',
          description: 'Робити складну інформацію зручною на клієнті.',
        },
        {
          title: 'Delivery',
          description: 'Відповідати за рішення через реалізацію та реліз.',
        },
        {
          title: 'Співпраця',
          description: 'Координувати технічну роботу в невеликих командах.',
        },
      ],
      posture: {
        label: 'Технічна позиція',
        description:
          'Архітектура корисна лише тоді, коли робить наступну зміну безпечнішою.',
      },
      chronology: {
        label: 'Повна хронологія',
        description:
          'У резюме зібрані дати, освіта та повна професійна хронологія.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Контакти / початок',
        title: 'Будьмо на зв’язку.',
        description: 'Оберіть канал — обидва посилання працюють напряму.',
      },
      email: { label: 'Написати email.', address: 'iworb.ne@gmail.com' },
      linkedin: {
        label: 'Зв’язатися в LinkedIn.',
        action: 'Відкрити LinkedIn',
      },
      details: {
        location: {
          label: 'Місце й формат',
          description:
            'Ханау, Німеччина. Remote / міжнародні B2B-проєкти. Є дозвіл на роботу в Німеччині.',
        },
        phone: {
          label: 'Телефон',
          number: '+49 151 72585876',
          action: 'Зателефонувати напряму',
        },
        cv: {
          label: 'Резюме',
          description: 'Хочете спочатку переглянути повну професійну історію?',
          action: 'Завантажити резюме',
        },
      },
    },
  },
};
