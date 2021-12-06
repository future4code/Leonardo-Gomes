import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const postRegisterUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"

        const result = await connection("labecommerce")
            .select()
            .where("name", "LIKE", `%${query}%`)
            .orWhere("email", "LIKE", `%${query}%`)

        const users = result.map(toUser)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password
    }
}