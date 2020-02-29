exports.up = function(knex) {
  return knex.schema.createTable('entries', tbl => {
    tbl.increments();
    tbl.string('title', 250).notNullable();
    tbl.text('text').notNullable();
    tbl.datetime('created_at').defaultTo(knex.fn.now());
    tbl
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('entries');
};
