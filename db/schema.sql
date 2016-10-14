CREATE DATABASE spacelaunch_sequelize_db;

USE spacelaunch_sequelize_db;

CREATE TABLE spaceships
(
	id INT NOT NULL AUTO_INCREMENT,
	passengers VARCHAR(255) NOT NULL,
	launched BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
