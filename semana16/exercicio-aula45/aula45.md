# Atividade da tarde - Aula 45
## Banco de dados e introdução a SQL

## Exercício 1-a

CREATE TABLE Actor(
id  VARCHAR(255) PRIMARY KEY, 

name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL 
);

- VARCHAR para caracteres variáveis como strings;
- PRIMARY KEY para chave de identificação única;
- NOT NULL para fixar como obrigatório e não opcional;
- DATE para data.

## Exercício 1-b

SHOW DATABASES;

SHOW TABLES;

- SHOW DATABASES/TABLES traz os nomes de cada database/tabela existente na schema.

## Exercício 1-c

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
    "Tony Ramos",
    400000,
	"1948-08-25", 
	"male"
    );

DESCRIBE Actor;

- O comando DESCRIBE Actor traz informações mais precisas de como a tabela foi estruturada.

## Exercício 2-a

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002", 
	"Glória Pires",
	1200000,
	"1963-08-23", 
	"female"
);

## Exercício 2-b

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002", 
	"Fernanda Montenegro",
	400000,
	"1929-10-16", 
	"female"
);

> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

/ O programa detecta e impede automaticamente a criação de uma entrada com PRIMARY KEY pois já existe pois foi declarada.

## Exercício 2-c

INSERT INTO Actor (id, name, salary)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);

> Error Code: 1136. Column count doesn't match value count at row 1

Apesar de todas as informações necessárias terem sido passadas, não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.

## Exercício 2-d

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

> Error Code: 1364. Field 'name' doesn't have a default value

Era esperado mais um campo de dado name para que um novo item na tabela Actor fosse criado.

## Exercício 2-e

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Esse erro é determinado pois o formato de resposta passado para o birth_date é inválido, deveria seguir com o pardão para string "YYYY-MM-DD".

## Exercício 2-f

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "006", 
    "Chay Suede",
    100000,
    "1992-06-30", 
    "male"
);


SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor 

WHERE gender = "male";

## Exercício 3-a

SELECT * from Actor WHERE gender = "female";

## Exercício 3-b

SELECT salary from Actor WHERE name = "Tony Ramos";


## Exercício 3-c

A pesquisa acontece, mas não é encontrado nenhum actor.

## Exercício 3-d

SELECT id, name, salary from Actor WHERE salary < 500000;

## Exercício 3-e

> Error Code: 1054. Unknown column 'nome' in 'field list'

O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.

## Exercício 4-a

SELECT * FROM Actor; -> Seleciona a tabela de atores

WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
trás os resuktados da tabela de atores que começa com A até J e com saários até 300000.


## Exercício 4-b

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;


## Exercício 4-c

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";


## Exercício 4-d

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
    AND salary BETWEEN 350000 AND 900000;


//////////

## Exercício 5-a

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);


## Exercício 5-b

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);


## Exercício 5-c

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);


## Exercício 5-d

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);


## Exercício 5-e

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000-09-10",
  10
);

## Exercício 6-a

SELECT id, name, rating FROM Movie
WHERE id = "004";


## Exercício 6-b

SELECT * FROM Movie
WHERE name = "O Auto da Compadecida";


## Exercício 6-c

SELECT id, name, synopsy FROM Movie
WHERE rating > 7;


### Exercício 7-a

SELECT * from Movie
WHERE name like "%vida%";

### Exercício 7-b

SELECT * from Movie
WHERE (name like "%dona%" or synopsis like "%dona%");

### Exercício 7-c

SELECT * from Movie
WHERE release_date < "2021-11-22";

### Exercício 7-d

SELECT * from Movie
WHERE (release_date < "2021-11-22") AND (name like "%dona%" or synopsy like "%dona%") AND (rating > 7);