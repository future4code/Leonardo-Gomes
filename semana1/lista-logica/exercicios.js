// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2

}

console.log(soma(5,8))

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(base , altura) {
  base = Number(prompt("Qual a base do retângulo?"))
  altura = Number(prompt("Qual a altura do retângulo?"))
  const area = base * altura
  console.log(area)
  return area
  
}


// EXERCÍCIO 02
function imprimeIdade(anoatual, anoDeNascimento) {
  anoatual = Number(prompt("Qual é o ano atual?"))
  anoDeNascimento = Number(prompt("Qual é o ano que nasceu?"))
  const idade = anoatual - anoDeNascimento
  console.log (idade)
  return idade

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = (peso/ (altura * altura))
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Insira nome")
  idade = prompt("Insira idade")
  email = prompt("Insira email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("Insira cor")
  cor2 = prompt("Insira cor")
  cor3 = prompt("Insira cor")
  console.log([cor1, cor2, cor3])
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const textoMaiuscula = string.toUpperCase()
  return textoMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const show = (custo / valorIngresso)
  return show

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const texto1 = string1.length
  const texto2 = string2.length
  return texto1 === texto2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length-1]] = [array[array.length-1], array[0]]
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const texto1 = string1.toLowerCase()
  const texto2 = string2.toLowerCase()
  return texto1 === texto2
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 const anoAtual = Number(prompt("Digite ano atual"))
 const anoDeNascimento = Number(prompt("Digite ano que nasceu"))
 const anoCpf = Number(prompt("Digite ano de emissão de seu CPF"))
  
 const idadeUsuario = anoAtual - anoDeNascimento
 const renovaOuNao = anoAtual - anoCpf

 const caso1 = idadeUsuario <= 20  && renovaOuNao >= 5
 const caso2 = idadeUsuario > 20 && idadeUsuario <= 50 && renovaOuNao >= 10
 const caso3 = idadeUsuario > 50 && renovaOuNao >= 15

 console.log(caso1 || caso2 || caso3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBissexto = (ano % 4 === 0) && (ano % 100 != 0 || (ano % 400 === 0))
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, escolaridade, horario) {
  idade = prompt("Você tem mais de 18 anos?")
  escolaridade = prompt("Você possui ensino médio completo?")
  horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
  console.log((idade.includes("sim")) && (escolaridade.includes("sim")) && (horario.includes("sim")))
  
}
