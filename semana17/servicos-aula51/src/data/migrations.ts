import { connection } from "./connection"
import { getAddressInfo } from '../services/getAdressInfo'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS exercicio2 (
         id VARCHAR(255) PRIMARY KEY,
         cep VARCHAR(255) NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
      
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   const insertAddressInfo = async () => {
      const address = await getAddressInfo("06310320", "400", "casa")
      await connection("aula51_addressInfo")
      .insert(address)
      .catch(printError)
   }


   const closeConnection = () => { connection.destroy() }

   createTables()
      .then(insertAddressInfo)
      .finally(closeConnection)
