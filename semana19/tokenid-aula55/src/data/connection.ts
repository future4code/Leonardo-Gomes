import knex from "knex";
import dotenv from "dotenv";

const Aula55_UserTable = "User";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    }
});

const createUser = async (
    id: string, 
    email: string, 
    password: string) => {
    await connection
        .insert({
        id,
        email,
        password,
    })
    .into(Aula55_UserTable);
};