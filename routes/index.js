var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('please login')
});

router.get('/login', (req, res, next) => {
  knex('users').select('*').where('username' === `${req.body.login}`)
  .then(users => {
    res.json(users.rows)
  })
})

module.exports = router;
