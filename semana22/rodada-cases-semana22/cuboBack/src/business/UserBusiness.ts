import { UserData } from "../data/UserData";
import { MissingFields } from "../error/MissingFileds";
import { UserInsertDTO, UserInputDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    
    async user(input: UserInputDTO){

        if(input.participation === 0){
            throw new Error("Participation can't be zero")
        }

        if( !input.firstName || !input.lastName || !input.participation){
            throw new MissingFields()
        }

        const user: UserInsertDTO = {
            id: IdGenerator.generete(),
            ...input
        }

        const userData = new UserData()
        const result = await userData.insertUser(user)
    
        return result
    } 

    async alluser(){

        const userData = new UserData()
        const result = await userData.getAllUser()
    
        return result
    }
}