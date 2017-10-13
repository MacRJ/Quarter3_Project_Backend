
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      return knex('emails').insert([
        {id: 1, user_id: 1, from: 'Scarlet Johanson', subject: 'call me!', email: 'This coming tuesday is Taco Night. I want me some tacos', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 2, user_id: 1, from: 'Adam Sandler' ,subject: 'That one thing.', email: 'For me, it is the fight scenes', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 3, user_id: 1, from: 'Zodiac Killer' ,subject: 'Rich, You are the Man!', email: 'I LIKE ZODIACS but I love killing more', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 4, user_id: 1, from: 'Mike Myers' ,subject: 'no More tacos, please!!', email: 'I want healthier food', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 5, user_id: 1, from: 'That Blue Guy' ,subject: 'The Magic Number', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 6, user_id: 1, from: 'Al Bundy' ,subject: 'I like the Simpsons!!', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 7, user_id: 1, from: 'Holly' ,subject: 'Im so lazzzy', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 8, user_id: 1, from: 'Will Smith' ,subject: 'actining all cool!!', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 9, user_id: 1, from: 'NASA' ,subject: 'Astronaunts wanted', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 10, user_id: 1, from: 'Nigerian Prince' ,subject: 'Billions of dollars', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 11, user_id: 1, from: 'Jimmy Hoffa' ,subject: 'Under the Stadium', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 12, user_id: 1, from: 'Cheetoe guy' ,subject: 'Dont eat at tacoBell', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 13, user_id: 1, from: 'Marge Simpson' ,subject: 'Al Bundy is a stalker', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 14, user_id: 1, from: 'Homer' ,subject: 'Doh!!!', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 15, user_id: 1, from: 'TuCan Sam' ,subject: 'I broke my nose', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 16, user_id: 1, from: 'Sylvester stallone' ,subject: 'Adrian!!!', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 17, user_id: 1, from: 'Dr. Evil' ,subject: '"Lazers"', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 18, user_id: 1, from: 'Tom Cruse' ,subject: 'We need you in MI8', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 19, user_id: 1, from: 'James Hetfield' ,subject: 'play the lead in next song', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 20, user_id: 1, from: 'My Horse' ,subject: 'Dont turn me into glue :(', email: 'is simply dummy text of the printing and typesetting industry', note_attached: true, timed_activity: true, clicked: false, selected: false},
        {id: 21, user_id: 1, from: 'Louie Ck' ,subject: 'My last set was just ok', email: 'is simply dummy text of the printing and typesetting industry.', note_attached: true, timed_activity: true, clicked: false, selected: false}
      ]);
    });
};
