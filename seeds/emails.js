
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      return knex('emails').insert([
        {id: 1, user_id: 1, from: 'Scarlet Johanson', subject: 'invitation: Taco night!', email: 'This coming tuesday is Taco Night. I want me some tacos', note_attached: true, timed_activity: true, clicked: false, selected: true},
        {id: 2, user_id: 1, from: 'Adam Sandler' ,subject: 'That one thing.', email: 'For me, it is the fight scenes', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 3, user_id: 1, from: 'Zodiac Killer' ,subject: 'Rich, You are the Man!', email: 'I LIKE ZODIACS but I love killing more', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 4, user_id: 1, from: 'Mike Myers' ,subject: 'no More tacos, please!!', email: 'I want healthier food', note_attached: true, timed_activity: true, clicked: false, selected: false}
      ]);
    });
};
