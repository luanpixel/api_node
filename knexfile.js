module.exports = {
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
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