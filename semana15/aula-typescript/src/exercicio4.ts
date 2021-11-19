// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Para que o código seja transpilado para javascript, realize o comando tsc no terminal.


type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// O processso em si não, mas o comando tsc deve ser atruibuido ao caminho espcifico da pasta src e do arquivo ts. Tsc src/test.ts

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// o tsc realiza toda a transpilação de todos arquivos assim atualizando.
