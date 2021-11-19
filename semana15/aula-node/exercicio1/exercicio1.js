console.log("exercicio 1")

// a) Para acessar os argumentos, usamos o objeto process.argv, que é um array de todos os parâmetros usados pelo node. Os argumentos [0] e [1] são fixos, onde o primeiro é o próprio node e o segundo é o arquivo que está rodando. Assim mostrando no terminal as informações através do Node.

// b)
const nome = process.argv[2]
const idade = Number(process.argv[3])
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`

    if(nome && idade){
        console.log(mensagem)
    } else {
        console.log("Esperava 2 parâmetros, 'so recebi um.")
    }

console.log(mensagem)

// c) 

const idadeFuturo = idade + 7 
const mensagem2 = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFuturo}!`

console.log(mensagem2)