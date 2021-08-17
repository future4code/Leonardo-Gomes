// // Exercícios de interpretação de código

// // 1.  Leia o código abaixo

// const filme = {
//     nome: "Auto da Compadecida", 
//     ano: 2000, 
//     elenco: [
//         "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//         "Virginia Cavendish"
//         ], 
//     transmissoesHoje: [
//         {canal: "Telecine", horario: "21h"}, 
//         {canal: "Canal Brasil", horario: "19h"}, 
//         {canal: "Globo", horario: "14h"}
//         ]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


// //a) O que vai ser impresso no console?
// // No console.log(filme.elenco[0]) irá ser impresso o primeiro item da Array o ator "Matheus Nachtergaele".
// // No console.log(filme.elenco[filme.elenco.length - 1]) irá ser impresso o último item da Array a atriz "Virginia Cavendish".
// // No console.log(filme.transmissoesHoje[2]) imprimirá a última transmissão da Array {canal: "Globo", horario: "14h"}.


// //2. Leia o código abaixo

// const cachorro = {
//     nome: "Juca", 
//     idade: 3, 
//     raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


// //a) O que vai ser impresso no console?
// // console.log(cachorro) = infos do cachorro com nome "Juca"
// // console.log(gato) = irá ser impresso todas as infos iguais a do "cachorro", porém com nome: "Juba"
// // console.log(tartaruga) = irá ser impresso todas as infos iguais a do "cachorro", porém com nome: "Jubo" sendo substituído com replaceAll("a", "o").

// //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// // Faz um espalhamento de informações ou spread em que pega infos de uma Variavel e copia para a variavel que queira modificar/adicionar valores.


// // 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
//     return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// //a) O que vai ser impresso no console?
// // No console.log(minhaFuncao(pessoa, "backender")) irá ser impresso um valor booleano em que a pessoa (objeto da function) é false na propriedade "backender"
// // No console.log(minhaFuncao(pessoa, "altura")) irá ser impresso "undefined" por não declarar a propriedade "altura"

// //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// // no primeiro console tem objeto e a propriedade da function, dado isso na impressão imprimirá o caminho que foi feito até chegar no valor do boolean pedido.
// // no segundo console não irá imprimir nada pois "altura" não foi declarada.

// Exercícios de escrita de código 

// 1 - Resolva os passos a seguir: 

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

// Exemplo de entrada

// // const pessoa = {
// //    nome: "Amanda", 
// //    apelidos: ["Amandinha", "Mandinha", "Mandi"]
// // }

// // Exemplo de saída
// //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const pessoa = {
    nome: "Leonardo",
    apelidos: ["Leozinho", "Leleo", "Leo"]
}

function minhaPessoa(pessoa) {
    const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`
    return frase
}

console.log(pessoa);


// // // b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoaAdicoes = {
    ...pessoa, 
    novosApelidos: ["Ivi", "Leonor", "Leonardu"]
}

function minhaPessoa(pessoaAdicoes){
    const frase2 = `Eu sou ${pessoaAdicoes.nome}, mas pode me chamar de ${pessoaAdicoes.novosApelidos}`
    return frase2
}

console.log(pessoaAdicoes);

// // 2 - Resolva os passos a seguir: 

// // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// /*/
// 1. O valor de `nome`                                             
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`


 const pessoa1 = {
    nome: "Maria",
    idade: 19,
    profissao: "Designer"
};

const minhaFuncao1 = (pessoa1) => { 
    return [
        pessoa1.nome, 
        pessoa1.nome.length, 
        pessoa1.idade, 
        pessoa1.profissao, 
        pessoa1.profissao.length
    ]
};

console.log(minhaFuncao1(pessoa1))

const pessoa2 = {
    nome: "Gojo",
    idade: 28,
    profissao: "Professor"
};

const minhaFuncao2 = (pessoa2) => { 
    return [
        pessoa2.nome, 
        pessoa2.nome.length, 
        pessoa2.idade, 
        pessoa2.profissao, 
        pessoa2.profissao.length
    ]
};

console.log(minhaFuncao2(pessoa2))


// 3 - Resolva 

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

const carrinho = [] 

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
};

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
};


const adicionaCarrinho = (sacolao) => {
    carrinho.push(sacolao);
}

adicionaCarrinho(fruta1);
adicionaCarrinho(fruta2);
adicionaCarrinho(fruta3);

console.log(carrinho);


// DESAFIOS 
// 1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

const infoPessoa = () => {
    const pessoa = {
    nome: prompt("Qual seu nome?"),
    idade: Number(prompt("Qual sua idade?")),
    profissao: prompt("Qual sua profissão??")
    };

    console.log(pessoa);
    console.log(typeof pessoa);
}

//infoPessoa()

// 2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true


const validarAnoLancamento = (filme1, filme2) => {
  return `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`;

}

const elDourado = {
    nome: "El Dourado",
    anoLancamento: 2000
}

const irmaoUrso = {
    nome: "Irmão Urso",
    anoLancamento: 2003
}

console.log(validarAnoLancamento(elDourado, irmaoUrso))


 // 3 - Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

const inverteDisponibilidade = (fruta) => {
    return {...fruta, disponibilidade: !fruta.disponibilidade}
}

console.log(inverteDisponibilidade(fruta1))
