// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// No Typescript quando atribuirmos um valor para uma variável tem que ser correspondente a tipagem seja string tem que ser string, ou number tem que ser number.

const minhaString: string = "oi"


// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

const meuNumero: number =  5
const meuOutroNumero: number | string = "oi"


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:  `nome`, que é uma string `idade`, que é um número; `corFavorita`, que é uma string.

// const person: { nome: string, idade: number, corFavorita: string} = {
//     nome: "Maria",
//     idade: 19,
//     corFavorita: "Verde"
// }

// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

enum cores{
    VERMELHO = "Vermelho",
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: cores
}

const person1: pessoa = {
    nome: "Maria",
    idade: 19,
    corFavorita: cores.VERDE
}

const person2: pessoa = {
    nome: "Lucas",
    idade: 19,
    corFavorita: cores.ANIL
}

const person3: pessoa = {
    nome: "Murilo",
    idade: 30,
    corFavorita: cores.LARANJA
}

