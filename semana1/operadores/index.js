// Exercícios Interpretação de código

// 1 -

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2  
// console.log("a. ", resultado)
// // Resultado será false; pois tem apenas um valor true e outro false e para ser && precisa ser somente valores true.

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// // Resultado será false; pois tem apenas um valor true e outro dois false e para ser && precisa ser somente valores true. 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// // Resultado será true; pois para ser || precisa ter todos os valores False e ali na expressão tem um valor true.

// console.log("d. ", typeof resultado)
// Typeof do resultado não é uma string ou number pois contém um valor True or False ou seja é um Boolean.

//----------------------//

// 2 -

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)

// O problema que está ocorrendo aqui é que no momento de "const soma =" do colega está concatanando os dois valores de string e não somando na expressão dois valores Numbers.

// 3 - A solução correta para soma é:

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// let resultado
// resultado =  Number(primeiroNumero) + Number(segundoNumero)

// console.log("A soma é", resultado)

// Exercícios de escrita de código

// 1 -

// const idadeMinha = prompt("Qual sua idade?")
// const idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMinha >= idadeAmigo)

// let resultado
// resultado = Number(idadeMinha) - Number(idadeAmigo)
// console.log("A diferença de idade dos amigos é:", resultado)

// 2 - 

// const numeroPar = prompt("Insira um número par")
// const valorFixo = 2

// let resultado
// resultado = Number(numeroPar) % valorFixo
// console.log("Resultado resto da divisão é", resultado)

// O padrão se segue com resto = 0, pois como solicitei para o usuário colocar um número par e o resto da divisão por 2 é sempre = 0.
// Se o usuário colocar um número ímpar o resto da expressão será = 1 pois não dei a condicional para o computador ler somentes números pares.

// 3 -
 
// const usuarioIdade = prompt("Qual sua idade?")
// const meses = 12
// const dias = 365
// const horas = 24


// let resultado
// resultado =  Number(usuarioIdade) * Number(meses)
// console.log("Sua idade em meses é:", resultado)

// resultado = Number(usuarioIdade) * Number(dias)
// console.log("Sua idade em dias é:", resultado)

// resultado = Number(usuarioIdade) * Number(horas) * Number(dias)
// console.log("Sua idade em horas é:", resultado)

// 4 -

// const valorPedido1 = prompt("Digite um número")
// const valorPedido2 = prompt("Digite um outro número")

// console.log("O primeiro número é maior que segundo?" , valorPedido1 > valorPedido2)
// console.log("O primeiro número é igual ao segundo?" , valorPedido1 === valorPedido2)
// console.log("O primeiro número é divisível pelo segundo?", valorPedido1 % valorPedido2 === 0)
// console.log("O segundo número é divisível pelo primeiro?", valorPedido2 % valorPedido1 === 0)

// DESAFIOS

// 1-

// - Graus Fahrenheit(°F) para Kelvin(K)

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// - Graus Celsius(°C) para Graus Fahrenheit (°C)

//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32


// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

// const fahrenheit1 = 77
// const kelvin1 = (fahrenheit1 - 32) * (5 / 9) + 273.15
// console.log("Resultado em Kelvin é:", kelvin1, "K")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

// const celsius1 = 80
// const fahrenheit2 = (celsius1 * (9 / 5) + 32)
// console.log("Resultado em Fahrenheit é:", fahrenheit2, "°F")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

// celsius2 = 30
// fahrenheit3 = (celsius2 * (9 / 5) + 32)
// kelvin3 = (fahrenheit3 - 32 * (5 / 9) + 273.15)
// console.log("Resultado em Fahrenheit é:", fahrenheit3, "°F", "Resultado em Kelvin é:", kelvin3, "K")


// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// celsius3 = Number(prompt("Insira um valor em Celsius"))
// fahrenheit4 = (celsius3 * (9 / 5) + 32)
// kelvin4 = (fahrenheit4 - 32 * (5 / 9) + 273.15)

// console.log("Resultado em Kelvin é:", kelvin4, "K")
// console.log("Resultado em Fahrenheit é:", fahrenheit4, "°F")

// 2- Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
//Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    //a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

    // let quilowattHora = 0.05
    // let energiaCasa = 280

    // let resultado
    // resultado = Number(energiaCasa) * Number(quilowattHora)
    // console.log("O valor a ser pago pela residência é:", resultado)

    
    //b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
    //Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

    // let quilowattHora = 0.05
    // let energiaCasa = 280
    // let desconto = 15

    // let resultado
    // resultado = Number(energiaCasa) * Number(quilowattHora) 
    // resultado2 = Number(resultado) / Number(desconto)
    // resultado3 = Number(resultado) - Number(resultado2)

    // console.log("O valor a ser pago pela residência é:", resultado3)


// 3 - [NÃO DEU TEMPO]  Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
//      Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
//      Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). 
//      Dada essa introdução, faça o que se pede:

    //a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    //`20lb equivalem a X kg`

    // const medidaLbParaKg = (20 * 1)
    // const kg = 1
    // const lb = 20

    // resultado = Number(kg) * Number(lb)
    // console.log("Equivale a:")


    //b)Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    //`10.5oz equivalem a X kg`



    //c)Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    //`100mi equivalem a X m`



    //d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    //`50ft equivalem a X m`



    //e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    //`103.56gal equivalem a X l`



    //f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    //`450 xic equivalem a X l`



    //g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
    