// Exercícios de interpretação de código
// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
//     return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
// console.log(minhaFuncao(2)) vai ser: minhaFuncao(2) * 5 = 10
// console.log(minhaFuncao(10)) vai ser: minhaFuncao(10) * 5 = 50

//b) O que aconteceria se no VSCode retirássemos os dois `console.log` e simplesmente invocássemos a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Haveria outra função no escopo global e nada iria returnar para os console.log

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade
// O texto é inserido pelo usuário no prompt, porém quando é inserido aparece "false" como valor boolean, pois não está sendo encontrado na pesquisa com .includes("cenoura") <-- este valor. 

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     //i.   `Eu gosto de cenoura`
     //ii.  `CENOURA é bom pra vista`
     //iii. `Cenouras crescem na terra`
// Na saída do console irá encontrar no texto.toLowerCase().includes("cenoura"), ambas as frases com o valor "True".

// Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:

    //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    //"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    
// function meusDados() {
//     console.log("Eu sou Leonardo Gomes, tenho 23 anos, moro em Porto Alegre e sou estudante.")

// }
// meusDados

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    //b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    //Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    
// function meusDados(nome, idade, cidade, profissao) {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro na ${cidade} e eu sou ${profissao}.`

// }

// console.log(meusDados("Leonardo", 23, "Porto Alegre", "estudante"))

// 2 - Escreva as funções explicadas abaixo:

    //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

    function somaNum (n1,n2){
        resultado = n1 + n2
        return resultado
    }

    const soma = somaNum(6,4)
    console.log(soma)

    //b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    function ehMaior(n1,n2){
        resultado = n1 > n2
        return resultado
    }

    const numeros = ehMaior(7,2)
    console.log(numeros)


    //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    function ehPar(n1){
        resultado = n1 % 2 === 0
        return resultado
    }

    const pares = ehPar(20)
    console.log(pares)


    //d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    // Números inseridos: 30 e 3
    // Soma: 33
    // Diferença: 27
    // Multiplicação: 90
    // Divisão: 10
    
function soma (numero1 , numero2){
    const somaNumeros = numero 1 + numero2
    return somaNumeros

}

function subtracao (numero1 , numero2){
    const subNumeros = numero 1 + numero2
    return subNumeros

}

const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira outro número"))

console.log(`Números inseridos: ${numero1} e ${numero2}`)
console.log(`Soma: ${Soma(numero1 ,numero2)}`)
