console.log("exercicio 3")

const novaTarefa = process.argv[2]

const listaDeTarefas = [
    "arrumar a cama",
    "escovar os dentes",
    "calcular as dívidas"
]

// adicionar a tarefa
listaDeTarefas.push(novaTarefa)

// exibir a lista
console.log(listaDeTarefas)

// npm run ex3  -> no terminal