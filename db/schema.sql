CREATE DATABASE pokemon_db;
USE pokemon_db;

CREATE TABLE pokemon
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	caught BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
