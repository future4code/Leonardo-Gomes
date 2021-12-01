import { Request, Response } from "express"
import { connection } from "../data/connection"
import { product } from "../types"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"
        const sort = req.query.sort === "name" ? "name" : "id"

        const result = await connection("aula49_exercicio")
            .select()
            .where("name", "LIKE", `%${query}%`)
            .orWhere("image_url", "LIKE", `%${query}%`)
            .orderBy(sort)

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