// Exercícios de interpretação de código

// 1. Leia o código abaixo:

    // const respostaDoUsuario = prompt("Digite o número que você quer testar")
    // const numero = Number(respostaDoUsuario)

    // if (numero % 2 === 0) {
    //   console.log("Passou no teste.")
    // } else {
    //   console.log("Não passou no teste.")
    // }
    
    

    //a) Explique o que o código faz. Qual o teste que ele realiza? 
    // Realiza um comparador de condicional se o valor encontrado for igual a esta propriedade (numero % 2 === 0), o teste afirma que passa no teste senão ele identifica que não passou.

    //b) Para que tipos de números ele imprime no console "Passou no teste"? 
    // Números pares com resto = 0

    //c) Para que tipos de números a mensagem é "Não passou no teste"? 
    // Números ímpares com resto = 1


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     break; // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    //a) Para que serve o código acima?
    //  O switch serve para blocagens mais organizadas comparando igualdades.

    //b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // Irá ser impresso o preço da Maçã = 2.25

    //c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // O preço de Pêra = 5, porque quando retirar o brake do valor pêra o programa dará o valor preco abaixo de default. 

// 3. Leia o código abaixo:

    
    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    //     let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)
   

    //a) O que a primeira linha está fazendo?
    // Está dando uma condicional em que numero = valor digitado por usuário > (for maior que) 0

    //b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // Que 10 passa no teste. E -10 nem aparece pois não foi dada condicional "else".

    //c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    // Sim pois "mensagem" não está sendo definidade.


// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Qual sua idade?"))

const podeDirigir = (idade) => {
    if(idade >= 18){
    console.log("Você pode dirigir")
    } else {
        console.log("Você não pode")
    }    
} 

// podeDirigir(idade);

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

// Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
// Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

// Se o usuário digitar "V", a saída deve ser:  "Boa Tarde!"

const turno = prompt("Qual período você estuda? Digite ( M )-Matutino, ( V )-Vespertino ou ( N )-Noturno").toUpperCase();

if (turno === "M") {
    console.log("Bom dia!");
    } else if (turno === "V") {
        console.log("Boa Tarde!");
    } else if (turno === "N") {
        console.log("Boa noite!");
    } else {
        console.log("Digite período vávido como mostrado dentro dos parênteses");
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
 
const turno = prompt("Qual período você estuda? Digite ( M )-Matutino, ( V )-Vespertino ou ( N )-Noturno").toUpperCase();

switch(turno){
    case "M":
        console.log("Bom dia!");
    break
    case "V":
        console.log("Boa Tarde!");
    break
    case "N":
        console.log("Boa noite!");
    break
    default:
        console.log("Digite período vávido como mostrado dentro dos parênteses");
    break
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("` 

const vamosAssistir = (generoFilme, valorIngresso, ) => {
    if(generoFilme === "fantasia" && valorIngresso <= 15){
    console.log("Bom filme!")
    } else {
    console.log("Escolha outro filme :(")
    }
}


const qualGeneroFilme = prompt("Quais desses Gêneros de filme quer assistir Fantasia, Drama ou Suspense?").toLowerCase()
const quantoValorIngresso = Number(prompt("Quanto pode pagar no valor do ingresso? Digite de 0 à 30"))

vamosAssistir(qualGeneroFilme, quantoValorIngresso);

// DESAFIOS

// 1 - Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const qualGeneroFilme = prompt("Quais desses Gêneros de filme quer assistir Fantasia, Drama ou Suspense?").toLowerCase() 
const quantoValorIngresso = Number(prompt("Quanto pode pagar no valor do ingresso? Digite de 5 à 30")) 
const lanchinho = prompt("Qual lanche vai comprar? Pipoca, Chocolate, Salgadinhos").toLowerCase()


const vamosAssistir = (generoFilme, valorIngresso, ) => {
    if(generoFilme === "fantasia" && valorIngresso <= 15){
    console.log("Bom filme!")
    console.log("Aproveite o seu/sua", lanchinho)
    } else {
    console.log("Escolha outro filme :(")
    }
}

vamosAssistir(qualGeneroFilme, quantoValorIngresso, lanchinho);


// 2 - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

//- Nome completo;
//- Tipo de jogo: IN indica internacional; e DO indica doméstico;
//- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//- Categoria: pode ser as opções 1, 2, 3 ou 4;
//- Quantidade de ingressos

// junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (unidade * quantidade) / valor IN = 4.10

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)


const nomeCompleto = prompt("Qual é seu nome completo?").toLowerCase() 
const tipoDeJogo = prompt("Qual é o tipo de jogo? Digite (IN)-Internacional ou (DO)-Doméstico").toUpperCase()
const etapaDeJogo = prompt("Qual etapa do jogo irá assistir? Digite (SF)-semi-final ; (DT)-decisão de terceiro lugar e (FI)-indica final").toUpperCase()

const categoria = Number(prompt("Qual é a categoria do jogo? Digite (1), (2), (3), (4)"))
const quantidadeDeIngressos = Number(prompt("Quantos ingressos irá comprar?"))

// const categoriaSFUm = 1320.00
// const categoriaSFDois = 880.00
// const categoriaSFTres = 550.00
// const categoriaSFQuatro = 220.00

// const categoriaDTUm = 660.00
// const categoriaDTDois = 440.00
// const categoriaDTTres = 330.00
// const categoriaDTQuatro = 170.00

// const categoriaFIUm = 1980.00
// const categoriaFIDois = 1320.00
// const categoriaFITres = 880.00
// const categoriaFIQuatro = 330.00

// if (categoria){
//     console.log("Categoria ST?")
//     } else {
//       console.log("Custa 1320.00?")
//     }
    