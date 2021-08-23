// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let par = []
  for(i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 ){
      par.push(array[i])
    }
  } return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let parElevados = []
 for(i = 0; i < array.length; i++){
   if(array[i] % 2 === 0){
     parElevados.push(array[i] ** 2)
   }
 } return parElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for(let numero of array){
    if(numero > maior){
      maior = numero
    }
  } return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor
  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  const diferenca = maiorNumero - menorNumero
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const paresPrimeiro = []
  for(let i = 0; paresPrimeiro.length < n; i++){
  if(i % 2 === 0)
    paresPrimeiro.push(i)
  } return paresPrimeiro
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoA && ladoB === ladoC) {
    return 'Equilátero'
  } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
    return 'Isósceles'
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoC !== ladoB) {
    return 'Escaleno'
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
  const indiceSegundoMenor = 1
  const indiceSegundoMaior = array.length - 2

  return [
     arrayOrdenado[indiceSegundoMaior],
     arrayOrdenado[indiceSegundoMenor]
  ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let = pessoa
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
 }
}

// EXERCÍCIO 13A
const validarPessoa = pessoa => (
  pessoa.altura > 1.5 &&
  pessoa.idade > 14 &&
  pessoa.idade < 60
)
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter(validarPessoa)

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const somar = (num1, num2) => num1 + num2

   contas.forEach(conta => {

      const somaDosGastos = conta.compras.reduce(somar, 0)

      conta.saldoTotal -= somaDosGastos

      conta.compras = []
   })

   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
  const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1

  return consultas.sort(compararNomesDeConsulta)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const gerarData = string => {

    const [dia, mes, ano] = string.split("/")

    return new Date(`${ano}-${mes}-${dia}`)
 }
 const compararDatasDeConsulta = (a, b) => {
  if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
    return 1
 } else {
    return -1
 } 
}
 return consultas.sort(compararDatasDeConsulta)
}