|  __ \ |  ____|    /\    | |                          
 | |  | || |__      /  \   | |                          
 | |  | ||  __|    / /\ \  | |                          
 | |__| || |____  / ____ \ | |____                      
 |_____/ |______|/_/    \_\|______|                     
  / ____|| |           | || |                           
 | |     | |__    __ _ | || |  ___  _ __    __ _   ___  
 | |     | '_ \  / _` || || | / _ \| '_ \  / _` | / _ \ 
 | |____ | | | || (_| || || ||  __/| | | || (_| ||  __/ 
  \_____||_| |_| \__,_||_||_| \___||_| |_| \__, | \___| 
  ___    ___  ___  __                       __/ |       
 |__ \  / _ \|__ \/_ |                     |___/        
    ) || | | |  ) || |                                  
   / / | | | | / / | |                                  
  / /_ | |_| |/ /_ | |                                  
 |____|_\___/|____||_|         _____   ____   _         
 |__   __|        | |         / ____| / __ \ | |        
    | |  ___  ___ | |_  ___  | (___  | |  | || |        
    | | / _ \/ __|| __|/ _ \  \___ \ | |  | || |        
    | ||  __/\__ \| |_|  __/  ____) || |__| || |____    
    |_| \___||___/ \__|\___| |_____/  \___\_\|______|  


	Para fazer o teste, utilize o site abaixo:
	
	https://www.db-fiddle.com/f/qrNPxmHsxkiTUaU1Rv8W4i/7


Questões de SQL - Os comandos abaixo criam um conjunto mínimo de tabelas
que controla a locação de filmes em uma video-locadora.

Procure criar queries que respondam aos seguintes
desafios, ordenados por dificuldade:

01-) Liste o nome de todos os clientes
02-) Liste os filmes da categoria 'COMEDIA'
03-) Lista os filmes cujo Valor da Diária seja inferior a R$ 4,00
04-) Liste os filmes e suas respesctivas categorias em uma única query (dica: join)
05-) Faça uma listagem contendo o nome do cliente, e o nome e categoria dos filme por 
     ele alugados (dica: multiplos joins)
06-) Insira uma nova categoria de filmes, chamada 'TERROR'
07-) Insira o filme 'IT - A COISA', pertencendo à categoria 'TERROR' recém criada.
08-) Atualize o nome do filme 'INDIANA JONES' para 'MANDALORIAN'
09-) Quais foram os filmes mais alugados?
10-) Algum filme nunca foi alugado?
11-) Algum cliente alugou algum filme mais de uma vez?
*/

-- Tabela de Categorias de Filmes
CREATE TABLE CATEGORIA (
  idCategoria 			INT,
  NomeCategoria			VARCHAR(100),
  PRIMARY KEY PK_CATEGORIA (idCategoria)
);

INSERT INTO CATEGORIA VALUES (100, 'AVENTURA');
INSERT INTO CATEGORIA VALUES (200, 'DRAMA');
INSERT INTO CATEGORIA VALUES (300, 'COMEDIA');
INSERT INTO CATEGORIA VALUES (400, 'INFANTIL');


-- Tabela de Filmes disponíveis para locação
CREATE TABLE FILME (
  idFilme 				INT,
  NomeFilme 			VARCHAR(100),
  IdCategoria 			INT,
  ValorDiariaLocacao 	DOUBLE,
  PRIMARY KEY PK_FILME (idFilme)
);

INSERT INTO FILME VALUES (1, 'INDIANA JONES',      100, 1.99);
INSERT INTO FILME VALUES (2, 'SHERLOCK HOLMES',    100, 1.99);
INSERT INTO FILME VALUES (3, 'THE ROOM',           100, 2.99);
INSERT INTO FILME VALUES (4, 'KUNG FURY',          100, 5.99);
INSERT INTO FILME VALUES (11, 'FERIAS FRUSTRADAS', 300, 1.99);
INSERT INTO FILME VALUES (12, 'APERTEM OS CINTOS', 300, 1.99);
INSERT INTO FILME VALUES (13, 'ZOOLANDER',         300, 1.99);
INSERT INTO FILME VALUES (21, 'PASSAROS FERIDOS',  200, 4.99);
INSERT INTO FILME VALUES (22, 'APERTEM OS CINTOS', 200, 1.99);
INSERT INTO FILME VALUES (51, 'KUNG FU PANDA',     400, 0.99);
INSERT INTO FILME VALUES (52, 'PROCURANDO NEMO',   400, 0.99);

-- Tabela de CLIENTES
CREATE TABLE CLIENTE (
  cpf  					BIGINT,
  Nome		 			VARCHAR(100),
  DataNascimento 		DATE,
  PRIMARY KEY PK_CLIENTE (cpf)
);

INSERT INTO CLIENTE VALUES (11122233305, 'DMITRI ZANGIEF', "2001-01-01");
INSERT INTO CLIENTE VALUES (22233344405, 'JOSE BLANKA', "1995-01-01");
INSERT INTO CLIENTE VALUES (33344455505, 'CARLOS GUILE', "1965-01-01");
INSERT INTO CLIENTE VALUES (44455566605, 'EMERSON HONDA', "1998-01-01");
INSERT INTO CLIENTE VALUES (55566677705, 'DJALMA DHALSIN', "1967-01-01");
INSERT INTO CLIENTE VALUES (66677788805, 'ODAIR BISON', "1983-01-01");
INSERT INTO CLIENTE VALUES (77788899905, 'ADELCIO VEGA', "1987-01-01");
INSERT INTO CLIENTE VALUES (88899900005, 'TARCISIO RYU', "1991-01-01");


-- Tabela de LOCACOES
CREATE TABLE LOCACAO (
  idLocacao				BIGINT AUTO_INCREMENT,
  cpfCliente			BIGINT,
  idFilme				INT,
  DataLocacao 			DATE,
  DataDevolucao			DATE,
  ValorFaturado			DOUBLE,
  PRIMARY KEY PK_LOCACAO (idLocacao)
);

INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (11122233305, 1, "2001-01-01", "2001-01-10", 14.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (11122233305, 3, "2002-03-15", "2002-03-16", 2.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (11122233305, 1, "2002-02-02", "2002-02-03", 7.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (22233344405, 1, "2004-02-02", "2004-02-15", 18.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (22233344405, 21, "2014-02-02", "2014-02-03", 2.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (22233344405, 52, "2019-03-02", "2019-03-03", 2.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (44455566605, 12, "2005-02-02", "2005-02-15", 19.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (44455566605, 13, "2015-02-02", "2014-02-03", 2.90);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (44455566605, 22, "2015-03-02", "2015-03-03", 2.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (77788899905, 2, "2004-02-02", "2004-02-15", 19.10);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (77788899905, 51, "2016-02-02", "2016-02-04", 3.90);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (77788899905, 52, "2017-03-02", "2017-03-03", 2.00);
INSERT INTO LOCACAO (cpfCliente, idFilme, DataLocacao, DataDevolucao, ValorFaturado) VALUES (88899900005, 52, "2014-11-02", "2014-11-03", 2.00);
