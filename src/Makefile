
#########################################################################
#							Основные цели.								#
#########################################################################

#
all: build test

# Запуск grandcore.org.org.
run: run_backend

# Запуск grandcore.org.org.
stop: stop_backend

# Сборка всего проекта как BackEnd`а, так и FrontEnd`а.
build: clean build_frontend build_backend collectstatic

# Запуск полной проверки BackEnd`а и FrontEnd`а.
check: check_backend check_frontend

# Запуск всех тестов BackEnd`а и FrontEnd`а.
test: test_backend test_frontend

# Очистка BackEnd`а и FrontEnd`а.
clean: clean_backend clean_frontend



#########################################################################
#					Цели для работы с BackEnd`ом.						#
#########################################################################

PATH_BACKEND = ./backend
DOCKER_COMPOSE = docker-compose -f $(PATH_BACKEND)/docker-compose.yml

# Запуск BackEnd`а.
run_backend:
	$(DOCKER_COMPOSE) up -d

# Остановка BackEnd`а.
stop_backend:
	$(DOCKER_COMPOSE) down -v

# Сборка Docker контейнеров для BackEnd`а.
build_backend:
	$(DOCKER_COMPOSE) build
	

# Запуск проверки BackEnd`а.
check_backend:
	@echo "ERROR: Проверка BackEndа не реализованна!"
	@exit 1

# Запуск тестов BackEnd`а.
test_backend:
	@echo "ERROR: Тесты BackEndа не реализованны!"
	@exit 1

# Очистка BackEnd`а.
clean_backend:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	rm -rf $(PATH_BACKEND)/grandcore.org/frontend/static
	rm -rf $(PATH_BACKEND)/grandcore.org/frontend/templates


# Создание новых миграций на основе изменений, которые вы внесли в свои модели на стороне BackEnd`а.
makemigrations:
	$(DOCKER_COMPOSE) run --rm grandcore.org ./manage.py makemigrations

# Применение миграций, а также за отмену подачи и перечисления их статуса на стороне BackEnd`а.
migrate:
	$(DOCKER_COMPOSE) run --rm grandcore.org ./manage.py migrate --no-input

# Выполним подготовку/сборку статических файлов.
collectstatic:
	$(DOCKER_COMPOSE) run --rm grandcore.org ./manage.py collectstatic --no-input

# Запустить очистку Docker контейнеров.
dockerclean:
	docker system prune -f



#########################################################################
#					Цели для работы с FrontEnd`ом.						#
#########################################################################

PATH_FRONTEND = ./frontend
NPM = npm --prefix $(PATH_FRONTEND)

# Устанавливаем модули для FrontEnd`а.
install_node_modules:
	$(NPM) install --save

# Запуск Webpack сервера для разработки FrontEnd`а.
run_frontend:
	$(NPM) run start

# Сборка FrontEnd`а.
build_frontend:
	$(NPM) run build
	mkdir -p $(PATH_BACKEND)/grandcore.org/frontend/templates/frontend
	cp -r $(PATH_FRONTEND)/dist/static $(PATH_BACKEND)/grandcore.org/frontend
	cp -f $(PATH_FRONTEND)/dist/index.html $(PATH_BACKEND)/grandcore.org/frontend/templates/frontend/index.html


# Запуск проверки FrontEnd`а.
check_frontend:
	@echo "ERROR: Проверка FrontEndа не реализованна!"
	@exit 1

# Запуск тестов FrontEnd`а.
test_frontend:
	$(NPM) run test

# Очистка FrontEnd`а.
clean_frontend:
	rm -rf ./frontend/dist
