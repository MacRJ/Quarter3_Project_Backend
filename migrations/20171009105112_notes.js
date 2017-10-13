
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table){
    table.increments('notesid');
    table.integer('user_id');
    table.integer('email_id');
    table.string('note');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
