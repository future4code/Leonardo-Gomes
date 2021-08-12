// Exercícios de interpretação de código

// 1 - Na declaração let tanto valor a e b são = 10, mas quando b foi alterado para = 5. 
// No momento em que foi imprimido a mensagem em console.log(a,b) ,o valor de b passou a ser = 5 devido a alteração feita.

// 2 - Na declaração let a = 10 e b = 20 e c = a ( ou seja o valor de "c" é igual ao valor de a = 10; logo c = 10)
// portanto se c = a | b = c | a = b || todos vão ter o valor de 10;  pois "b" não vai ter mais o valor de "20" e sim " = c "

// 3 - As declarações let de : let p e let t. Devem ser renomeadas para 
//   let p -->  let horasPorDia = prompt("Quantas horas você trabalha por dia?")
//   let t -->  let recebePorDia = prompt("Quanto você recebe por dia?")
//   alert("Voce recebe ${recebePorDia/horasPorDia} por hora")

// Exercícios de escrita de código

//Exercício 1

const names = undefined
let age = undefined

console.log(typeof names)
console.log(typeof age)

// na declaração de names e age não foi atribuído valor por isso apresenta a mensagem undefined.


const nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")

console.log("Olá", nome, "você tem", idade, "anos.")

console.log(typeof nome)
console.log(typeof idade)

// Foi impresso no tipo String em ambas informações porque foi uma informação com texto para ser apresentada no console.log
// Mesmo tendo uma let com um valor de idade / Number, no momento em que foi impresso sai em string para o usuário ler.

//Exercício 2

const assisteAnime = prompt("Você assiste anime?")
console.log("Voce assiste anime?", assisteAnime)

const gostaPagodeCoreano = prompt("Você gosta de Pagode Coreano?")
console.log("Você gosta de escutar Pagode Coreano?", gostaPagodeCoreano)

const colecionaFunkoPop = prompt("Você coleciona Funkos Pop?")
console.log("Você coleciona Funko Pops", colecionaFunkoPop)

// Exercício 3

let a = 10
let b = 25
let c = 35

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
// Não cheguei em um resultado

// DESAFIO

let altura = prompt("Digite alguma altura")
let largura = prompt("Digite alguma largura")

let x = Number(altura) + Number(largura)
let y = Number(altura) * Number(largura)

console.log("Resultado de x é", x)
console.log("Resultado de y é", y)
