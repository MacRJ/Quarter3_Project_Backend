
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reply', function(table){
    table.increments('replyid');
    table.integer('user_id');
    table.integer('email_id');
    table.string('replymessage');
    table.string('reply_time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reply');
};
