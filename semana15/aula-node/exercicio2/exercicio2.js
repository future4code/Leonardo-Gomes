console.log("exercicio 2")

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const contas = (operacao, num1, num2) => {
    switch(operacao){
        case "soma":
            console.log(
                `A soma da operação é = ${num1 + num2}`
            )
            break;
        case "subt":
            console.log(
                `A subtração da operação é = ${num1 - num2}`
            )
            break;
        case "multi":
            console.log(
                `A multiplicação da operação é = ${num1 * num2}`
            )
            break;
        case "divs":
            console.log(
                `A divisão da operação é = ${num1 / num2}`
            )
            break;
        default:
            console.log("Erro na operação")
    }
}

console.log(contas(operacao, num1, num2))