exports.up = function (knex) {
    return knex.schema.createTable("cad_filmes", (table) => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.string("genero").notNull();
        table.text("description").notNull();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("cad_filmes");
};