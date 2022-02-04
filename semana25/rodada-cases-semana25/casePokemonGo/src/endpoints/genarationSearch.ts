import { Request, Response } from "express";
import { connection } from "../data/connection";

export const generationSearch = async(req:Request, res:Response):Promise<void> => {
    try {

        const {generation} = req.params

        if(!generation){
            throw new Error("Insira uma informação válida")
        }

        const [checkGeneration] = await connection("pokemonGo")
            .where({generation}) 

        if(!checkGeneration){
            throw new Error("Insira uma geração de 1 à 7")
        }

        const result = await connection("pokemonGo")
            .where({generation})


        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
} 