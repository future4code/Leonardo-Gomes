import { Request, Response } from "express"
import { connection } from "../data/connection"
import { purchase } from "../types"

export const postPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"

        const result = await connection("labecommerce")
            .select()
            .where("user_id", "LIKE", `%${query}%`)
            .orWhere("product_id", "LIKE", `%${query}%`)

        const purchase = result.map(toPurchase)

        if (!purchase.length) {
            res.statusCode = 404
            throw new Error("No purchases found")
        }

        res.status(200).send(purchase)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toPurchase = (input: any): purchase => {
    return {
        id: input.id,
        user_id: input.user_id,
        product_id: input.product_id,
        quantity: input.quantity
    }
}