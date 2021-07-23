module.exports = {
    client: "mysql2",
    connection: {
        database: "apinode",
        user: "root",
        password: ""
    },
    poll: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "Knex_migrations"
    }
}