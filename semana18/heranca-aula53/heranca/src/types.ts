// HERANÇA

// EX1

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
      id: string,
      email: string,
      name: string,
      password: string
  ) {
      console.log("Chamando o construtor da classe User")
      this.id = id
      this.email = email
      this.name = name
      this.password = password
  }


  public getId(): string {
      return this.id
  }

  public getEmail(): string {
      return this.email
  }

  public getName(): string {
      return this.name
  }

  public interoduceYourself(): string {
    return `Olá, me chamo ${this.name} bom dia!`
  }

}


// EX2

export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

// Polimorfismo

// EX1 

export interface Client {
  name: string
  registrationNumber: number
  consumedEnergy: number
  calculateBill(): number
}

// EX2

export abstract class Place {
  constructor(protected cep: string) { }

  public getCep(): string {
      return this.cep;
  }
}

// EX3


export class Residence extends Place {
  constructor(
      protected residentsQuantity: number,
      cep: string
  ) {
      super(cep);
  }

  public getResidentsQuantity(): number {
      return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
      protected floorsQuantity: number,
      cep: string
  ) {
      super(cep);
  }

  public getFloorsQuantity(): number {
      return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
      protected machinesQuantity: number,
      cep: string
  ) {
      super(cep);
  }

  public getMachinesQuantity(): number {
      return this.machinesQuantity
  }
}


// EX4

export class ResidentialClient extends Residence implements Client {
  constructor(
      private cpf: string,
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      residentsQuantity: number,
      cep: string
  ) {
      super(residentsQuantity, cep)
  }

  public getCpf(): string {
      return this.cpf;
  }

  public calculateBill(): number {
      return this.consumedEnergy * 0.75;
  }
}



// EX5 

export class CommercialClient extends Commerce implements Client {
  constructor(
      private cnpj: string,
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      floorsQuantity: number,
      cep: string
  ) {
      super(floorsQuantity, cep);
  }

  public calculateBill(): number {
      return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
      return this.cnpj;
  }
}

// EX6 

export class IndustrialClient extends Industry implements Client {
  constructor(
      private insdustryRegisterNumber: number,
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      machinesQuantity: number,
      cep: string
  ) {
      super(machinesQuantity, cep);
  }

  public getInsdustryRegisterNumber(): number {
      return this.insdustryRegisterNumber;
  }

  public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
} 