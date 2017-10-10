
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, user_id: 1, email_id: 2, note: 'sadlfkjasdlfjsfjojefoewjffew'},
        {id: 2, user_id: 1, email_id: 3, note: 'sadlfkjasdlfjsfjojefoewjffew'},
        {id: 3, user_id: 1, email_id: 1, note: 'sadlfkjasdlfjsfjojefoewjffew'}
      ]);
    });
};
