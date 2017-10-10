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


module.exports = router;
