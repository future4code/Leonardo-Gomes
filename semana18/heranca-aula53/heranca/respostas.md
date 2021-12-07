// HERANÇA

// EX1

// Analise a classe User. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

*a* Seria possível imprimir a senha (password) atrelada a essa instância?

R> Não pois ela está em uma propriedade privada. Se for criada uma instância getPassword será possível.

*b* Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

R> Uma vez.



// EX2

// Analise a Customer. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o Customer é uma subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends na declaração da classe Customer; e, em seu construtor, foi usado o super.

*a* Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

R> Uma vez

*b* Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

R> Uma vez, porque só foi criada a instância do User.



// EX3

// Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard). Perceba que as propriedades públicas da classe pai (User) foram "herdadas" pela classe filha (Customer).

*a* Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

R> Não, porque ainda está como private, assim não podendo ser acessada para ter acesso a filhiação.



// EX4

// Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método

```
class User {
	// demais implementações

	public interoduceYourself(): string {
	   return `Olá, me chamo ${this.name} bom dia!`
	}
}
```

```
const customer = new Customer(...) // passa os parâmetros corretos
customer.introduceYourself()
```


// EX5

// Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.

```
class User {
	// demais implementações

	public interoduceYourself(): string {
			return `Olá, sou ${this.name}. Bom dia!`;
	}
}
```



// POLIMORFISMO 

// EX1 

*a* Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

R> Todas as propriedades foram impressas.



// EX2 

*a* Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

R> Cannot create an instance of an abstract class

*b* Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?

R> Para se criar a instância de classe, precisa referenciar a classe Place para ser uma filha.


// EX3 

```
export class Residence extends Place {
  constructor(
    private residentsQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}
```

```
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}
```

```
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}
```

// EX4 

*a* a. Que métodos e propriedades essa classe possui? Por quê?

R> Tem todos os metodos/atributos de herança da classe Residence, Place, Client. 


// EX5 

*a* Quais as semelhanças dessa classe com a ResidentialClient?

*b* Quais as semelhanças dessa classe com a ResidentialClient?


// EX6 

// Agora, crie a classe IndustrialClient para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.

*a* De qual classe a IndustrialClient deve ser filha? Por quê?

*b* Que interface a IndustrialClient implementa? Por quê?

*c* Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

