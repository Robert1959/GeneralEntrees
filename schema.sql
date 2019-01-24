-- Create Development database called generalentrees_dev_db --
CREATE DATABASE generalentrees_dev_db;
-- DROP DATABASE IF EXISTS generalentrees_dev_db; --

USE generalentrees_dev_db;


CREATE TABLE Categories (
	CategoryId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
	PRIMARY KEY (CategoryId)
);



CREATE TABLE Recipies (
    RecipeId INTEGER AUTO_INCREMENT NOT NULL,
    Title VARCHAR(254) NOT NULL,
    Servings INT default 1,
    Instructions TEXT,
    PrepTime VARCHAR(50) NOT NULL,
    CookTime VARCHAR(50) NOT NULL,
    Image VARCHAR(254) NOT NULL,
    CategoryId INT,
	PRIMARY KEY (RecipeId),
    FOREIGN KEY (CategoryId)
    REFERENCES Categories (CategoryId)
);


CREATE TABLE Ingredients (
	IngredientId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
    Units INT default 0,
    MeasurementUnit VARCHAR(50) NOT NULL,
    RecipeId INT,
	PRIMARY KEY (IngredientId),
    FOREIGN KEY (RecipeId)
	REFERENCES Recipies (RecipeId)
);

SELECT * FROM Ingredients;




-- Create QA database called generalentrees_test_db --
CREATE DATABASE generalentrees_test_db;
USE generalentrees_test_db;

CREATE TABLE Categories (
	CategoryId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
	PRIMARY KEY (CategoryId)
);


CREATE TABLE Recipies (
    RecipeId INTEGER AUTO_INCREMENT NOT NULL,
    Title VARCHAR(254) NOT NULL,
    Servings INT default 1,
    Instructions TEXT,
    PrepTime VARCHAR(50) NOT NULL,
    CookTime VARCHAR(50) NOT NULL,
    Image VARCHAR(254) NOT NULL,
    CategoryId INT,
	PRIMARY KEY (RecipeId),
    FOREIGN KEY (CategoryId)
    REFERENCES Categories (CategoryId)
);


CREATE TABLE Ingredients (
	IngredientId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
    Units INT default 0,
    MeasurementUnit VARCHAR(50) NOT NULL,
    RecipeId INT,
	PRIMARY KEY (IngredientId),
    FOREIGN KEY (RecipeId)
	REFERENCES Recipies (RecipeId)
);




-- Create Production database called generalentrees_db --
CREATE DATABASE generalentrees_db;
USE generalentrees_db;

CREATE TABLE Categories (
	CategoryId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
	PRIMARY KEY (CategoryId)
);


CREATE TABLE Recipies (
    RecipeId INTEGER AUTO_INCREMENT NOT NULL,
    Title VARCHAR(254) NOT NULL,
    Servings INT default 1,
    Instructions TEXT,
    PrepTime VARCHAR(50) NOT NULL,
    CookTime VARCHAR(50) NOT NULL,
    Image VARCHAR(254) NOT NULL,
    CategoryId INT,
	PRIMARY KEY (RecipeId),
    FOREIGN KEY (CategoryId)
    REFERENCES Categories (CategoryId)
);


CREATE TABLE Ingredients (
	IngredientId INTEGER AUTO_INCREMENT NOT NULL,
    Name VARCHAR(254) NOT NULL,
    Units INT default 0,
    MeasurementUnit VARCHAR(50) NOT NULL,
    RecipeId INT,
	PRIMARY KEY (IngredientId),
    FOREIGN KEY (RecipeId)
	REFERENCES Recipies (RecipeId)
);



