var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM emails`)
  .then(data => {
    res.json(data.rows)
  })
})
// Clicked on an Email

router.post('/clicked/:id', (req, res, next ) => {
  console.log('clickedRoute', req.params.id)
  knex.raw(`update emails set clicked = not clicked where id = ${req.params.id}`)
  .then(data => {
    knex.raw(`SELECT * FROM emails`)
    .then(data => {
      res.json(data.rows)
    })
  })
})

module.exports = router;
