// Exercícios de de interpretação de código

// 1 - Indique todas as mensagens impressas no console

// let array
// console.log('a. ', array)
// // // let array = undefined

// array = null
// console.log('b. ', array)
// // // array = null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // array.lenght é 11, pois tem 11 itens na lista

// let i = 0
// console.log('d. ', array[i])
// // //conforme array lista, a posição (i=0) é 3 

// array[i+1] = 19
// console.log('e. ', array)
// // array [i+1] = 19, acaba fazendo com que 19 substitua o valor 4 na lista

// const valor = array[i+6]
// console.log('f. ', valor)
// // array [i+6] é i=0/posição 0 -> é =3. Ou seja [3=6] = 9

// 2 - Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? //
// no momento em que o usuário digitar a frase no console irá aparecer
// tudo em maiúsculo e as letras "A" seram substituidas por "I"; e lenght é o número total de ccaracteres na frase.
// Ou seja a frase ficará "SUBI NUM ÔNIBUS EM MIRROCOS"

// Exercícios de escrita de código

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu email?")

// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(o), ${nomeDoUsuario}`)

//2. 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    //a) Imprima no console o array completo

    //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, . uma embaixo da outra.

    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


// let comidasPreferidas = [" Panquecas " , " Pizza " , " Yakisoba " , " Batata " , " Maçã "]

// console.log(`Lista de comidas: ${comidasPreferidas}`)

// console.log("Essas são as minhas comidas preferidas:")
// console.log(comidasPreferidas[0])
// console.log(comidasPreferidas[1])
// console.log(comidasPreferidas[2])
// console.log(comidasPreferidas[3])
// console.log(comidasPreferidas[4])

// let comidaUsuario = prompt("Qual sua comida preferida?")

// comidasPreferidas = ["Panquecas","Pizza","Yakisoba","Batata","Maçã"]
// console.log(comidasPreferidas)
// comidasPreferidas[1] = comidaUsuario
// console.log(comidasPreferidas)


//3. Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//c) Imprima o array no console

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no consoleImprima no console

// const listaDeTarefas = []

// const tarefa1 = prompt("Digite uma tarefa que tenha que fazer no dia")
// const tarefa2 = prompt("Digite outra tarefa que tenha que fazer")
// const tarefa3 = prompt("Digite mais uma tarefa que tenha que fazer")

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// const removerTarefa = Number(prompt("Digite 0, 1 ou 2 para remover tarefa já realizada no dia"))

// listaDeTarefas.splice(removerTarefa , 1)

// console.log(`Essas são as suas tarefas: ${listaDeTarefas}`)

// DESAFIOS

// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
 

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// const tam = frutas.lenght 

// console.log(`Tem Abacaxi? ${frutas.includes("Abacaxi")}`)
// console.log(frutas[2])
// const ultimaPosicao = tam - 3

// console.log("Está aqui:", frutas[ultimaPosicao])
