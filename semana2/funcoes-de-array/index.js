// // Exercícios de interpretação de código

// // 1.  Leia o código abaixo 

// const usuariosA = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuariosA.map((item, index, array) => {
//    console.log(item, index, array)
// })

// //a) O que vai ser impresso no console?
// // Vai ser impresso os elementos da array de usuarios, primeiro o item nome do usuário e depois seu índice respectivamente, e por fim a lista de array de todos os itens no meu novoArrayA.


// // 2. Leia o código abaixo

// const usuariosB = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuariosB.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

// //a) O que vai ser impresso no console?
// // Irá retornar apenas os elementos da array na minha novaArrayB.


// //3. Leia o código abaixo

// const usuariosC = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuariosC.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// //a) O que vai ser impresso no console?
// // Vai filtrar retornando o item e o index da array apenas dos usuarios "Amanda", "Laís", e não será impresso "Letícia" e suas infos.

// //

// // Exercícios de escrita de código

// //1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]


// //a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomesDosDoguinhos = pets.map(pets => pets.nome)
console.log(nomesDosDoguinhos);

// //b) Crie um novo array apenas com os cachorros salsicha

const apenasSalsichinhas = pets.filter(pets => pets.raca === "Salsicha")
console.log(apenasSalsichinhas) 

// //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const mensagem = pets.filter(pets => pets.raca === "Poodle").map(pets => `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
console.log(mensagem)

// // 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// //a) Crie um novo array que contenha apenas o nome de cada item

const nomesProdutos = produtos.map(produtos => produtos.nome)
console.log(nomesProdutos)

// //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const descontoDeProdutos = produtos.map((produtos) => {
    nome = produtos.nome
    preco = produtos.preco * 0.05
    arrayDesconto = {nome: produtos.nome, preco: produtos.preco}
    return arrayDesconto
})

console.log(descontoDeProdutos)

// //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const validarProdutosDeBebidas = produtos.filter(itemNome => itemNome.categoria === "Bebidas")
console.log(validarProdutosDeBebidas)

// //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter(produtos => produtos.nome.includes('Ypê'))
console.log(produtosYpe)

// //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const mensagens = produtosYpe.map(produtosYpe => `Compre ${produtosYpe.nome} por ${produtosYpe.preco}`)
console.log(mensagens)

// // DESAFIOS

// // 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

// //a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética** == Pesquise sobre o método `sort()`

// //b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**

// const ordemAlfabetica = pokemons.map(pokemon => pokemon.nome.sort())
// console.log(ordemAlfabetica)

// A)

const arrayPokemons = pokemons.sort(
    pokemonsOrdem = (a, b) => {
        if (a.nome > b.nome) {
            return 1;
        } else if (a.nome < b.nome){
            return -1;
        }
            return 0;
    }
)     
  
console.log(arrayPokemons);

// B)


  