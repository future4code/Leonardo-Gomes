import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
};

const createTables = () =>
    connection
        .raw(
            `
            CREATE TABLE Aula55_UserTable (
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
            );

        `)
        .then(() => { console.log("Tabelas criadas") })
        .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .then()
    .finally(closeConnection)
