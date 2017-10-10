
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emails', function(table){
    table.increments();
    table.integer('user_id');
    table.string('from');
    table.string('subject');
    table.string('email');
    table.boolean('note_attached');
    table.boolean('timed_activity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emails');
};
