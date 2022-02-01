import { UserInsertDTO } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {

    private static TABLE_NAME = "usuario_cubo"

    async insertUser(user: UserInsertDTO): Promise<string>{
        try {
            await this.getConnection().insert(user).into(UserData.TABLE_NAME)
            
            return "Usuário criado com sucesso"
        
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco!")
            }
        }
    }

    async getAllUser(){
        try {
            const result = await this.getConnection().select("*")
            .from(UserData.TABLE_NAME)

            return result

        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco!")
            }
        }
    }
}