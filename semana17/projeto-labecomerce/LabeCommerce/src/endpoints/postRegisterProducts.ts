import { Request, Response } from "express"
import { connection } from "../data/connection"
import { product } from "../types"

export const postRegisterProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"

        const result = await connection("aula49_exercicio")
            .select()
            .where("name", "LIKE", `%${query}%`)
            .orWhere("email", "LIKE", `%${query}%`)

        const products = result.map(toProduct)

        if (!products.length) {
            res.statusCode = 404
            throw new Error("No products found")
        }

        res.status(200).send(products)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toProduct = (input: any): product => {
    return {
        id: input.id,
        name: input.name,
        price: input.price,
        image_url: input.image_url
    }
}