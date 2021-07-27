require('dotenv').config()
module.exports = {
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    poll: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "Knex_migrations"
    }
}