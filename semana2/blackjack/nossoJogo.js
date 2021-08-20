
console.log("♦️ ♥️ ♣️ ♠️ Boas vindas ao jogo de Blackjack! ♦️ ♥️ ♣️ ♠️")

if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Rodada Iniciada")
   
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario} `) 
   
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador} `) 

if (pontuacaoUsuario === pontuacaoComputador){
	console.log("🤡 O jogo empatou 🤡") 

} else if (pontuacaoUsuario > pontuacaoComputador){
	console.log("🤩 Você venceu! 🥳")

} else if (pontuacaoUsuario < pontuacaoComputador){
	console.log("🤖 Computador venceu! 🤖")

} else {
   console.log("♤ ♡ O jogo acabou! ♢ ♧")
}
}
