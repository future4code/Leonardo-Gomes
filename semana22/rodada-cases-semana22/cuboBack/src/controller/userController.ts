import { Request, Response } from "express";

export class UserController{

    async createUser(req: Request, res: Response){
        try {
            const {firstName, lastName, participation} = req.body;
            
            const user : UserInputDTO = {
                firstName,
                lastName,
                participation
            }

            console.log(user)

        } catch (error) {
            
        }
    }

}