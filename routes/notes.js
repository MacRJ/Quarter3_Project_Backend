var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  knex.raw(`SELECT * FROM notes RIGHT JOIN emails ON notes.email_id = emails.id where notes.note is not null`)
  .then(data => {
    res.json(data.rows)
  })
});

// Update A Note
router.post('/update', (req, res, next) => {
  knex.raw(`UPDATE notes SET note = '${req.body.text}' where notesid = '${req.body.id}'`)
  .then(data => {
    knex.raw(`SELECT * FROM emails`)
    .then(data => {
      res.redirect("http://localhost:3000/g/notes")
  })
})
})

// Create a note
router.post('/create', (req, res, next) => {
  knex.raw(`INSERT INTO notes (user_id, email_id, note) VALUES (${req.body.user_id}, ${req.body.email_id}, '${req.body.note}')`)
  .then(data => {
    res.redirect("http://localhost:3000/g/email")
  })
})

// Delete a note
router.post('/delete/:id', (req, res, next) => {
  knex.raw(`DELETE FROM notes WHERE notesid = ${req.params.id}`)
  .then(data => {
    knex.raw(`SELECT * FROM notes RIGHT JOIN emails ON notes.email_id = emails.id where notes.note is not null`)
    .then(data => {
      res.json(data.rows)
    })
  })
})

module.exports = router;
