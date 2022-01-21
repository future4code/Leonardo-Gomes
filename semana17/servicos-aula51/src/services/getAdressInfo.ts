import axios from "axios";

// Exercício 1


type Adress = {
    cep: string
    logradouro: string,
    bairro: string,
    complemento: string,
    cidade: string,
    estado: string,
    numero: string
}

// export const getAdressInfo = async (cep: string): Promise<Adress> => {
    
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

//     return {
//         logradouro: response.data.logradouro,
//         bairro: response.data.bairro,
//         cidade: response.data.localidade,
//         estado: response.data.uf
//     }
// }

// Exercício 2

// CREATE TABLE IF NOT EXISTS exercicio2 (
//     id VARCHAR(255) PRIMARY KEY,
//     cep INT NOT NULL,
//     logradouro VARCHAR(255) NOT NULL,
//     number INT NOT NULL,
//     neighbourhood VARCHAR(255) NOT NULL,
//     city VARCHAR(255) NOT NULL,
//     state VARCHAR(255) NOT NULL
// );

// Exercício 3

export const getAddressInfo = async (cep: string, numero: string, complemento: string): Promise<Adress> =>{

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(response.data)
    return {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        complemento: complemento,
        cidade: response.data.localidade,
        numero: numero,
        estado: response.data.uf
    }
} 