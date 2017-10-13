
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {notesid: 1, user_id: 1, email_id: 2, note: 'sadlfkjasdlfjsfjojefoewjffew'},
        {notesid: 2, user_id: 1, email_id: 3, note: 'sadlfkjasdlfjsfjojefoewjffew'},
        {notesid: 3, user_id: 1, email_id: 1, note: 'sadlfkjasdlfjsfjojefoewjffew'}
      ]);
    });
};
