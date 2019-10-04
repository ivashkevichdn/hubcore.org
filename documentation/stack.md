# Используемый стек технологий для проекта [GrandCore][].

**Стек** _(англ. stack - стопка)_ **технологий** — это набор инструментов, применяющийся при работе в проектах и включающий языки программирования, фрэймворки, системы управления базами данных, компиляторы и т. д.
От выбранного стека технологий зависят производительность работы, требования к аппаратным ресурсам, надежность работы программного обеспечения (ПО).

## Бэкенд.

При разработке проекта [GrandCore][] в части бэкенда будут применятся следующий стек:

- Руководствуемся различными принципами разработки ([KISS][], [DRY][], [SOLID][], [GRASP][] и другие базводры).

- Языки [Python][] с применением [паттернов проектирования][].

- Фрэймворк для разработки веб приложений [Django][].

- В качестве реляционной базы данных используем [PostgreSQL][]:

  - применяется нормализация, денормализация данных в зависимости от требований;
  - репликации;
  - применение индексов;
  - транзакции с указанием уровня изоляции, блокировки;
  - построение сложных запросов.

    Все выше указанное должна обисбечивать [Django ORM][] как модель данных.

- Интерфейс WSGI [Gunicorn][] для [Django][].

- Обратный (реверсивный) прокси-сервер [Nginx][].

- [Certbot][] для автоматического использования сертификатов [Let's Encrypt][].

- Системы контроля версий [GitHub][] для самого проекта [GrandCore][].

- Системы контроля версий [Git][] для бизнес-процессов.

- Распределённая очередь задачи [Celery][].

- Резидентная система управления базами данных класса NoSQL - [Redis][] для ряда систем:

- системы кэширования для [Django][];

  - брокера для [Celery][];
  - бэкенда для [Celery][].

- [GitPython][] в качестве модуля для работы с [Git][].

- [Docker][] для контейнерезации проекта.

## Фронтенд.

В части фронтенда будут применяться следующий стек:

- Фрэймворк фронтенда [React][]. Взаимодействуем с сервером через классический REST API.

- [Blueprint][] инструмент для разработки веб-интерфейса на основе [React][].

- За контроль состояниями компонентов [React][] будет отвечать [Redux][].

- Метаязык для написания стилей используем [Sass][].

- Транскомпилятор для трансляции JavaScript стандарта ES6 в код стандарте ES5 с помощью [Babel][].

- Для анализа кода используем [ESLint][].

- [Webpack][] будет отвечать за сборку фронтендовской части проекта.

- Фрэймворк для JavaScript'овских тестов используем [Jest][].

## Дизайн.

- Макеты делаются дизайнерами в [Figma][].

---

## Инструменты для администрирования.

**Внимание:** на расмотрении с учетом текущего стека.

[grandcore]: https://github.com/grandcore/grandcore.org
[kiss]: https://ru.wikipedia.org/wiki/KISS_(%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF)
[dry]: https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself
[solid]: https://ru.wikipedia.org/wiki/SOLID_(%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
[grasp]: https://ru.wikipedia.org/wiki/GRASP
[паттернов проектирования]: https://refactoring.guru/ru/design-patterns/python
[postgresql]: https://www.postgresql.org/docs/
[django orm]: https://docs.djangoproject.com/en/2.2/topics/db/
[github]: https://github.com/grandcore/grandcore.org
[git]: https://www.git-scm.com/
[celery]: http://www.celeryproject.org/
[docker]: https://www.docker.com/
[docker-compose]: https://docs.docker.com/compose/
[django]: https://www.djangoproject.com/
[gunicorn]: http://gunicorn.org/
[nginx]: https://www.nginx.com/
[redis]: https://redis.io/
[gitpython]: https://gitpython.readthedocs.io/en/stable/
[certbot]: https://certbot.eff.org/lets-encrypt/pip-nginx
[let's encrypt]: https://letsencrypt.org/
[python]: https://www.python.org/
[pipenv]: https://docs.pipenv.org/
[pip]: https://pip.pypa.io/en/stable/
[requirements.txt]: https://pip.pypa.io/en/stable/user_guide/#id12
[unittest]: https://docs.python.org/3/library/unittest.html#module-unittest
[makefile]: https://www.gnu.org/software/make/manual/make.html
[vs code]: https://code.visualstudio.com/
[react]: https://reactjs.org/
[blueprint]: https://blueprintjs.com/
[redux]: https://redux.js.org/
[npm]: https://www.npmjs.com/
[node.js]: https://nodejs.org/en/
[webpack]: https://webpack.js.org/concepts/
[babel]: https://babeljs.io/docs/en/
[eslint]: https://eslint.org/
[sass]: https://sass-lang.com/
[jest]: https://jestjs.io/
[figma]: https://www.figma.com/file/Ag33afXxUOh2otvXJhwo7i/UIs?node-id=0%3A1
