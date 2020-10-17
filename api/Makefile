makemigrations:
	docker exec -it countdown-api python manage.py makemigrations

migrate:
	docker exec -it countdown-api python manage.py migrate

shell:
	docker exec -it countdown-api python manage.py shell

build:
	docker-compose build

run:
	docker-compose up

start:
	docker-compose up -d

stop:
	docker-compose stop
	docker-compose rm -f

dbcli:
	docker exec -it countdown-db psql -U postgres
