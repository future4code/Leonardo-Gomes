import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchName = async(req:Request, res:Response):Promise<void> => {
    try {

        const name = req.query.name || "%"

        const [checkName] = await connection("pokemonGo")
            .where("name", "LIKE", `%${name}%`)

        if(!checkName){
            throw new Error("Pokemon não cadastrado")
        }

        const result = await connection("pokemonGo")
            .where("name", "LIKE", `%${name}%`)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
} 