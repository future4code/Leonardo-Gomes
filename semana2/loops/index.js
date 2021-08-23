// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)
    
// Está realizando um loop cuja condição está diretamente relacionada ao número e ao incremento fixo. Cada vez somando o valor com o incremento fix do loop em processo até chegar em i < 5 e der "false". Está impresso "10"

// 2. Leia o código abaixo:

    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }
  
//a) O que vai ser impresso no console?
// Vai ser impresso os numero > 18, todos os menores que 18 não irão aparecer impresso.

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Colocando um let indice = 0 e fazendo um console.log(numero, "indice", indice)

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Irá pegar o número digitado pelo usuário e transformar em número de linhas * por número de quantidade de asteriscos, que seria impresso = **** 

//

// Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

if(bichinhos === 0) {console.log("Que pena! Você pode adotar um pet!")}

let arrayNomes = []

if(bichinhos > 0){
    for(let i=0; i < bichinhos; i++){
    const nomes = prompt("Digite o nome de seu/s pets")
    arrayNomes.push(nomes)
    }
}

console.log(`Seus bichinhos são ${arrayNomes}`)


// // 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// //a) Escreva um programa que **imprime** cada um dos valores do array original.

// //b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// //c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// //d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// //e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//A)
const imprimirArray = (arrayOriginal) =>{
    for(let numero of arrayOriginal){
    console.log(numero)  
    }
}

imprimirArray(arrayOriginal)

//B)

const imprimirDivisao = (arrayOriginal) =>{
    for(numero of arrayOriginal){
    console.log(numero/10)
    }
}

imprimirDivisao(arrayOriginal)

//C)

const imprimirNumerosPares = (arrayOriginal) => {
    let arrayNumerosPares = []
    for(let numero of arrayOriginal){
        if(numero % 2 === 0){
            arrayNumerosPares.push(numero)
        }
    }
    console.log(arrayNumerosPares)
}
imprimirNumerosPares(arrayOriginal)


//D)

const imprimirString = (arrayOriginal) =>{
    let arrayDeStrings = []
    let i = 0
    for(let numero of arrayOriginal){
        arrayDeStrings.push(`O elemento de index ${i} é ${numero}`)
        i++
    }
    console.log(arrayDeStrings)
}

imprimirString(arrayOriginal);

// E)

let maior = 0
let menor = arrayOriginal[0]

for(let num of arrayOriginal) {
	if(num > maior){
		maior = num
	} else if (num < menor){
        menor = num
    }
}

console.log(`O número maior é ${maior} e o menor é ${menor}`)


// DESAFIOS

// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 

//Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:


// Vamos jogar!
// O número chutado foi: 3
// Errrrrrrrou, é maior
// O número chutado foi: 18
// Errrrrrrrou, é menor
// O número chutado foi: 15
// Errrrrrrrou, é menor
// O número chutado foi: 11
// Acertou!!
// O número de tentativas foi: 4 


//a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

//b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

//- O número chutado, com a mensagem: `O número chutado foi: <número>`
//- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

//c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

console.log("Vamos jogar!")
const numeroEscolhido = Number(prompt("Escolha um número"))
// Desafio 2
//const numeroEscolhido = Math.floor(Math.random() * 100) + 1
//console.log(numeroEscolhido)

let acertou = false
let tentativas = 0

let numeroChutado

while(!acertou){
    numeroChutado = Number(prompt("Chute um número"))
    tentativas++
    console.log(`O número chutado foi: ${numeroChutado}`)
    if(numeroChutado === numeroEscolhido){
        console.log("Acertou!")
        console.log(`Número de tentativas foi: ${tentativas}`)
        acertou = true
    } else if (numeroEscolhido > numeroChutado){
        console.log("Errrrrrrrou, é maior")
    } else {
        console.log("Errrrrrrrou, é menor")
    }
}
