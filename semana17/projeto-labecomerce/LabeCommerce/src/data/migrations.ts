import { connection } from "./connection";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`

    CREATE TABLE labecommerce_users(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );

    CREATE TABLE labecommerce_products(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
        );

    CREATE TABLE labecommerce_purchases(
        id INT PRIMARY KEY,
        user_id FOREIGN KEY REFERENCES labecommerce_users,
        product_id FOREIGN KEY REFERENCES labecommerce_products,
        quantity INT NOT NULL,
        total_price INT NOT NULL
        );
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .then()
    .finally(closeConnection) 