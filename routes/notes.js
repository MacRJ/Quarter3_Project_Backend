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
  console.log('req.body', req.body)
  knex.raw(`UPDATE notes SET note = '${req.body.text}' where id = '${req.body.id}'`)
  .then(data => {
    knex.raw(`SELECT * FROM emails`)
    .then(data => {
      res.redirect("http://localhost:3000/g/notes")
  })
})
})

module.exports = router;
