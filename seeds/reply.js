
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reply').del()
    .then(function () {
      // Inserts seed entries
      return knex('reply').insert([
        {replyid: 1, user_id: 1, email_id: 1, replymessage: 'I would love to have some tacos!!', reply_time: '3 hours'},
        {replyid: 2, user_id: 1, email_id: 2, replymessage: 'One day at the Beach', reply_time: '3 hours'},
        {replyid: 3, user_id: 1, email_id: 3, replymessage: 'That scares the crap out of me coming from you!', reply_time: '4 hours'},
        {replyid: 4, user_id: 1, email_id: 4, replymessage: 'You must be an Italia-food type of guy', reply_time: '2 hours'}
      ]);
    });
};
