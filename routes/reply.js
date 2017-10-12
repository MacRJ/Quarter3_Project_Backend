var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

// Create Reply
router.post('/create', (req, res, next) => {
  knex.raw(`INSERT INTO reply (user_id, email_id, replyMessage, reply_time) VALUES (${req.body.user_id}, ${req.body.email_id}, '${req.body.reply}', ${req.body.reply_time})`)
  .then(data => {
    res.redirect("http://localhost:3000/g/email")
  })
})


// Get All Replies
router.get('/', (req, res, next) => {
  knex.raw(`SELECT * FROM reply RIGHT JOIN emails ON reply.email_id = emails.id WHERE reply IS NOT null ORDER BY id`)
  .then(data => {
    res.json(data.rows)
  })
})


// Update Reply
router.post('/update', (req, res, next) => {
  console.log('Update', req.body)
  knex.raw(`UPDATE reply SET replymessage = '${req.body.text}' where replyid = '${req.body.id}'`)
  .then(data => {
      res.redirect("http://localhost:3000/g/replys")
  })
})



// Delete Reply

router.post('/delete/:id', (req, res, next) => {
  console.log('theDelete', req.params.id)
  knex.raw(`DELETE FROM reply WHERE replyid = ${req.params.id}`)
  .then(data => {
    knex.raw(`SELECT * FROM reply RIGHT JOIN emails ON reply.email_id = emails.id WHERE reply IS NOT null ORDER BY id`)
    .then(data => {
      res.json(data.rows)
  })
})
})

module.exports = router;
