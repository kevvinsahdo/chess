DB_NETWORK=chess_progweb

.PHONY: db
db:
	@docker run --rm --net=${DB_NETWORK} naqoda/mysql-client mysql --host=mysql --execute 'CREATE DATABASE IF NOT EXISTS myapp;'
	@docker run --rm --net=${DB_NETWORK} naqoda/mysql-client mysql --host=mysql --execute '${"CREATE USER 'myapp'@'localhost'"};'
	@docker run --rm --net=${DB_NETWORK} naqoda/mysql-client mysql --host=mysql --execute '${"GRANT ALL PRIVILEGES ON myapp.* TO 'myapp'@'localhost'"};'
	@docker-compose run --rm chess npx sequelize db:migrate
	@docker-compose run --rm chess npx sequelize-cli db:seed:all

.PHONY: up
up:
	@docker-compose up