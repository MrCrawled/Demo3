exports.up = (knex) => {
    return Promise.all([
    knex.schema.createTable('pets', table =>{
        table.increments('id').primary();        
        table.string('pet_type',12);
        table.string('name',50).unique().notNullable();
        table.integer('age');
     })
  ]);
};

exports.down = (knex) => {
    return Promise.all([ knex.schema.dropTable('pets')]);
};