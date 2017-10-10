
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Rich', password: '$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu', first_name: 'Richard', last_name: 'Jones'}
      ]);
    });
};
