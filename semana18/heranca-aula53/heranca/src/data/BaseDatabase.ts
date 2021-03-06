import knex, { Knex } from "knex";

export class BaseDatabase {

  protected static connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
    }
  })

  getHost = () => process.env.DB_HOST
}