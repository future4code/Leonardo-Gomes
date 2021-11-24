# Atividade da tarde - Aula 46

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

## Exercício 1-a

ALTER TABLE Actor DROP COLUMN salary;

>R: Apaga toda coluna e os dados respectivos de salário.

## Exercício 1-b

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

>R: Altera a coluna gender para sex que recebe qté 6 caracteres.

## Exercício 1-c

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

> R: Altera o tamanho de gender para 255 caracteres.

## Exercício 1-d

//////////////////

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";


## Exercício 2-a

UPDATE Actor 
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";


## Exercício 2-b

UPDATE Actor
SET 
name = "JULIANA PÃES"
WHERE name = "Juliana Paes";


## Exercício 2-c

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

////////////////////

DELETE FROM Actor WHERE name = "Tony Ramos";


## Exercício 3-a

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

## Exercício 3-b

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;


//////////////////////////


SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;


## Exercício 4-a

SELECT MAX(salary) FROM Actor;

## Exercício 4-b

SELECT MIN(salary) FROM Actor WHERE gender = "female";
    
## Exercício 4-c

SELECT COUNT(*) FROM Actor WHERE gender = "female";

## Exercício 4-d

SELECT SUM(salary) FROM Actor;

//////////////////////////////


SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;


## Exercício 5-a

> R: Irá contar cada ator no grupo da coluna de gender, agrupando os separadamente em cada uma.

## Exercício 5-b

SELECT id, name FROM Actor
ORDER BY name DESC;

## Exercício 5-c

SELECT * FROM Actor
ORDER BY salary;

## Exercício 5-d

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

## Exercício 5-e

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


/////////////////

## Exercício 6-a

ALTER TABLE Movie ADD playing_limit_date DATE;

## Exercício 6-b

ALTER TABLE Movie CHANGE rating rating FLOAT;

## Exercício 6-c

UPDATE Movie
SET
playing_limit_date = "2021-12-31"
WHERE id = "001";

## Exercício 6-d

DELETE FROM Movie WHERE id = "001";

////////////////////


## Exercício 7-a

SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

## Exercício 7-b

SELECT AVG(rating) FROM Movie;

## Exercício 7-c

SELECT COUNT(*) FROM Movie WHERE playing_limit_date > "2021-11-23";

## Exercício 7-d

SELECT COUNT(*) FROM Movie WHERE release_date > "2021-11-23";

## Exercício 7-e

SELECT MAX(rating) FROM Movie;

## Exercício 7-f

SELECT MIN(rating) FROM Movie;


//////////////////////////


## Exercício 8-a

SELECT * FROM Movie ORDER BY title;

## Exercício 8-b

SELECT * FROM Movie ORDER BY title LIMIT 5;

## Exercício 8-c

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

## Exercício 8-d

SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;