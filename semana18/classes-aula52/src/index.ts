import app from "./app";

//EX 1

// a) O construtor é um método da classe servindo para criação, atualiazar e inicializar um objeto atráves de classes.
// assim como nesse exemplo:

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

// Chamamos usando new e o "nome da classe":
// const newUser = new UserAccount("01579013579", "Leo", 22)

// b)
type Transaction = {
    description: string,
    value: number,
    date: string
}
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}


//EX 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        console.log("Construtor da classe Transaction")
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const newUser = new UserAccount(
    "01579013579",
    "Leo",
    22
)
const newTransaction = new Transaction(
    "Pagar o pix",
    159,
    "06/12/2021"
)

newUser.setTransactions(newTransaction)
console.log(newUser.getTransactions())

//EX 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
    public getAccounts(): UserAccount[]{
        return this.accounts
    }
}