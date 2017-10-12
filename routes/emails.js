var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM emails ORDER BY id`)
  .then(data => {
    res.json(data.rows)
  })
})
// Clicked on an Email

router.post('/clicked/:id', (req, res, next ) => {
  knex.raw(`update emails set clicked = not clicked where id = ${req.params.id}`)
  .then(data => {
    knex.raw(`SELECT * FROM emails ORDER BY id`)
    .then(data => {
      res.json(data.rows)
    })
  })
})

// Selected
router.post('/selected/:id', (req, res, next ) => {
  knex.raw(`update emails set selected = not selected where id = ${req.params.id}`)
  .then(data => {
    knex.raw(`SELECT * FROM emails ORDER BY id`)
    .then(data => {
      res.json(data.rows)
    })
  })
})

module.exports = router;
