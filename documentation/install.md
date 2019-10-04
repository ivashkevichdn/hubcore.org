# Развертывание и установка проекта [GrandCore][] для разработки.

Здесь описывается пошаговая инструкция для развертывания и установки проекта [GrandCore][] для разработки с пояснением некоторых моментов.

### Backend.

- Приложение [Django][] обслуживается [Gunicorn][] (приложение WSGI).
- Используем [NginX][] в качестве обратного прокси-сервера и статического файлового сервера. Статические и мультимедийные файлы постоянно хранятся в томах.
- База данных [Postgres][].
- [Python][] зависимости устанавливаются через [pipenv][], с помощью `Pipfile` и `Pipfile.lock` или [pip][] с помощью `requirements.txt`.
- Поддержка нескольких переменных среды для настройки находятся в файле `.env`.
- Тесты выполняются с использованием встроеного в [Django][] тестер на основе [unittest][].

Также для удобства доступен [Makefile][]. Возможно, вам придется использовать `sudo make` вместо просто `make`, потому что часто нужны команды `docker` и `docker-compose` привилегия администратора.

### Frontend.

- Frontend основывается на фрэймворке [React][] с библиотекой GUI [Blueprint][] и с библиотекой [Redux][] для контроля состоянията компонентов [React][].

- Метакомпилятор [Babel][] скомпелирует код `JavaScript` `ES6` стандарта в код `JavaScript` который поддерживают браузера.

- Сборщик проектов [Webpack][] c анализатором кода [ESlint][].

## Требования.

Вам нужно установить [Docker][], [Docker-Compose][], [Node.js][] и [npm][]. И для удобства если в системе отсутствует установить `make` утилиту.

## Загрузка кода.

Код можно скачать или с клонировать с репозитории GitHub'а.

```bash
git clone https://github.com/grandcore/grandcore.org
```

Вы получите папку проекта `grandcore.org` с содержанием:

```
grandcore.org
├── grandcore.org/documentation
│   ├── grandcore.org/documentation/db.md
│   ├── grandcore.org/documentation/install.md
│   └── grandcore.org/documentation/stack.md
├── grandcore.org/files
│   └── grandcore.org/files/readme
│       ├── grandcore.org/files/readme/btn01.png
│       ├── grandcore.org/files/readme/btn02.png
│       ├── grandcore.org/files/readme/btn03.png
│       ├── grandcore.org/files/readme/btn04.png
│       ├── grandcore.org/files/readme/btn05.png
│       ├── grandcore.org/files/readme/btn06.png
│       ├── grandcore.org/files/readme/btn07.png
│       ├── grandcore.org/files/readme/btn08.png
│       ├── grandcore.org/files/readme/btn09.png
│       ├── grandcore.org/files/readme/btn10.png
│       └── grandcore.org/files/readme/btn11.png
├── grandcore.org/LICENSE
├── grandcore.org/README.md
├── grandcore.org/src
│   ├── grandcore.org/src/backend
│   │   ├── grandcore.org/src/backend/config
│   │   │   ├── grandcore.org/src/backend/config/nginx
│   │   │   │   └── grandcore.org/src/backend/config/nginx/conf.d
│   │   │   │       └── grandcore.org/src/backend/config/nginx/conf.d/local.conf
│   │   │   └── grandcore.org/src/backend/config/postgres
│   │   │       ├── grandcore.org/src/backend/config/postgres/docker-entrypoint-initdb.d
│   │   │       │   └── grandcore.org/src/backend/config/postgres/docker-entrypoint-initdb.d/init_postgres.sh
│   │   │       └── grandcore.org/src/backend/config/postgres/Dockerfile
│   │   ├── grandcore.org/src/backend/docker-compose.yml
│   │   ├── grandcore.org/src/backend/grandcore
│   │   │   ├── grandcore.org/src/backend/grandcore.org/api
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/admin.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/apps.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/__init__.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/models.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/tests.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/api/urls.py
│   │   │   │   └── grandcore.org/src/backend/grandcore.org/api/views.py
│   │   │   ├── grandcore.org/src/backend/grandcore.org/Dockerfile
│   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/admin.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/apps.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/__init__.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/models.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/tests.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/frontend/urls.py
│   │   │   │   └── grandcore.org/src/backend/grandcore.org/frontend/views.py
│   │   │   ├── grandcore.org/src/backend/grandcore.org/grandcore
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/grandcore/__init__.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/grandcore/settings.py
│   │   │   │   ├── grandcore.org/src/backend/grandcore.org/grandcore/urls.py
│   │   │   │   └── grandcore.org/src/backend/grandcore.org/grandcore/wsgi.py
│   │   │   ├── grandcore.org/src/backend/grandcore.org/manage.py
│   │   │   ├── grandcore.org/src/backend/grandcore.org/Pipfile
│   │   │   ├── grandcore.org/src/backend/grandcore.org/Pipfile.lock
│   │   │   └── grandcore.org/src/backend/grandcore.org/requirements.txt
│   │   ├── grandcore.org/src/backend/LICENSE
│   │   ├── grandcore.org/src/backend/README.md
│   │   └── grandcore.org/src/backend/scripts
│   │       └── grandcore.org/src/backend/scripts/do_backup.py
│   ├── grandcore.org/src/frontend
│   │   ├── grandcore.org/src/frontend/grandcore
│   │   │   ├── grandcore.org/src/frontend/grandcore/components
│   │   │   │   ├── grandcore.org/src/frontend/grandcore/components/HelloWorld.js
│   │   │   │   └── grandcore.org/src/frontend/grandcore/components/Grandcore.js
│   │   │   ├── grandcore.org/src/frontend/grandcore/favicon.ico
│   │   │   ├── grandcore.org/src/frontend/grandcore/index.html
│   │   │   ├── grandcore.org/src/frontend/grandcore/index.js
│   │   │   └── grandcore.org/src/frontend/grandcore/styles
│   │   │       └── grandcore.org/src/frontend/grandcore/styles/Grandcore.css
│   │   ├── grandcore.org/src/frontend/LICENSE
│   │   ├── grandcore.org/src/frontend/package.json
│   │   ├── grandcore.org/src/frontend/package-lock.json
│   │   ├── grandcore.org/src/frontend/README.md
│   │   └── grandcore.org/src/frontend/webpack.config.js
│   └── grandcore.org/src/Makefile
└── grandcore.org/TORs
    └── grandcore.org/TORs/v0-1.md

```

## Сборка.

Сборка всего проекта разделена на две части frontend и backend.

_**Предварительно требовани:**_ для сборки проекта требуется создать файл `.env`, где должно описаны переменные среды для сборки. Относительный путь к файлу: `./grandcore.org/src/backend/config/.env`.
Пример содержимого файла `.env` должнобыть:

```
DB_ENGINE=django.db.backends.postgresql_psycopg2
DB_NAME=grandcore_db
DB_USER=grandcore_user
DB_PASSWORD=exaple_password_1234
DB_HOST=postgres
DB_PORT=5432

SECRET_KEY=1234567890
DEBUG=1
```

Пояснение переменных:

- `DB_ENGINE` - Движок спомощью которого django работает с БД. В нашем случае django.db.backends.postgresql_psycopg2
- `DB_NAME` - Имя БД
- `DB_USER` - Пользователь
- `DB_PASSWORD` - Пароль
- `DB_HOST` - Имя сервера, где поднята БД. В нашем случае postgres
- `DB_PORT` - Port сервера, где поднята БД. В нашем случае 5432
- `SECRET_KEY` - Секретный ключ для нашего django приложения.
- `DEBUG` - Разрешить запускать врежиме отладке.

### Сборка frontend'a.

- Переходим в директорию проекта `frontend`.

```bash
cd grandcore.org/src/frontend
```

- Спомощью пакетного менеджера `npm` выполняем сборку фронтенда.

```bash
npm run build
```

- Мы получим собранный проект фронтенда в папке `dist` в текущей дериктории. Содержиме данной директории требуется скопировать в проект бэкенда, а именно в директорию приложения `frontend`.

```bash
mkdir -p ../backend/grandcore.org/frontend/templates/frontend
cp -r ./dist/static ../backend/grandcore.org/frontend
cp -f ./dist/index.html ../backend/grandcore.org/frontend/templates/frontend/index.html
```

- Теперь собранный файлу frontend'а находится в проекте backend'а . Чтож можно приступать к сборке `backend'а`.

### Сборка backend'a.

- Переходим в директорию проекта `backend`. С учетом, что текущая директория является `frontend` выполним следующую команду:

```bash
cd ../backend
```

- Теперь приступим развёртыванию [Docker][] контейнеров используя утилиту [Docker-Compose][].

**_Замечание:_** если у Вас не настроен запуск [Docker][] без прав суперпользователи, то перед полезной командой используйте команду `sudo` для ОС основанных на `Debian`.

```bash
docker-compose build
```

- Выполним подготовку/сборку статических файлов. Для того, что бы [Nginx][] мог ссылать к ним при запросе клиентом. Если этого не выполнить, то при запросе файлов `.js`, `.css` и другие статические файлы клиент получит ошибку 404.

```bash
docker-compose run --rm grandcore.org ./manage.py collectstatic --no-input
```

**_Замечание:_** после выполнения выше указанной команды мы получим директорию `static` защищённую от записи. Если требуется произвести манипуляции с данной папкой, то требуется проводить действие от имени администратора/суперпользователя.

### Примечание.

Все действия по сборке как `frontend'а`, так и `backend'а` можно выполнить командой при этом текущая директория должна быть `src` или `grandcore.org/src`. Так как все команды для утилиты `make` требуется проводить находясь в директории, где находится файла `Makefile`.

```bash
make build
```

**_Замечание:_** не забудьте про команду `sudo`, если [Docker][] и [Docker-Compose][] без прав администратора/суперпользователя не запускается у Вас.

## Создание новых миграций на основе изменений.

Если вы внесли изменения в модели или создали новые требуется произвести подготовку для новой миграции с помощью команды:

```bash
docker-compose run --rm grandcore.org ./manage.py makemigrations
```

или

```bash
make makemigrations
```

## Применение миграции.

Для миграции изменений моделей в базу данных требуется выполнить команду:

```bash
docker-compose run --rm grandcore.org ./manage.py migrate --no-input
```

или

```bash
make migrate
```

## Сборка статических файлов.

Требуетс для того, что бы [Nginx][] мог ссылать к ним при запросе клиентом. Если этого не выполнить, то при запросе файлов .js, .css и другие статические файлы клиент получит ошибку 404.

```bash
docker-compose run --rm grandcore.org ./manage.py collectstatic --no-input
```

или

```bash
make collectstatic
```

## Запуск.

Для запуска сервера на основе собранного [Docker][] контейнеров требуется выполнить команду:

```bash
docker-compose up -d
```

или

```bash
make run
```

## Остановка.

Для остановки сервера на основе собранного [Docker][] контейнеров требуется выполнить команду:

```bash
docker-compose down -v
```

или

```bash
make stop
```

## Тесты.

**Внимание** в данный момент не реализовано.

- `make check`
- `make test`

## Очистка от сборочных файлов.

Для очистки требуется произвести ряд команд. При это у Вас должна быть текущая директория `src` или `grandcore.org/src/`.

### Очистка backend'a.

```bash
find . -type f -name "*.pyc" -delete
find . -type d -name "__pycache__" -delete
rm -rf ./backend/grandcore.org/frontend/static
rm -rf ./backend/grandcore.org/frontend/templates
```

или

```bash
make clean_backend
```

### Очистка frontend'a.

```bash
rm -rf ./frontend/dist
```

или

```bash
make clean_frontend
```

### Примечание.

Для того чтобы выполнить очистку сразу в `frontend'е` и в `backend'е` можно воспользоваться одной командой:

```bash
make clean
```

## Очистка от не задействованных [Docker][] контейнеров.

Для очистки от не задействованных и/или промежуточных при разработке [Docker][] контейнеров требуется выполнить команду:

```bash
docker system prune -f
```

или

```bash
make dockerclean
```

## Настройка [VS Code][] для разработки и отладки.

### Backend.

**Внимание** в данный момент нахотится в описании.

### Frontend.

**Внимание** в данный момент нахотится в описании.

[grandcore]: https://github.com/grandcore/grandcore.org
[docker]: https://www.docker.com/
[docker-compose]: https://docs.docker.com/compose/
[django]: https://www.djangoproject.com/
[gunicorn]: http://gunicorn.org/
[nginx]: https://www.nginx.com/
[postgres]: https://www.postgresql.org/
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
