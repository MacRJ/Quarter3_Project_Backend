var express = require('express');
var router = express.Router();
var Cookies = require('cookies');
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('please login')
});

// login
router.post('/', (req, res, next) => {
  knex.raw(`SELECT * FROM users WHERE username = '${req.body.username}'`)
  .then(user => {
    bcrypt.compare(req.body.password, user.rows[0].password, (err, resp) => {
      if(resp) {
        res.cookie('user_name', user.rows[0].username);
        res.redirect('http://localhost:3000/')
      } else {
        res.send('try again')
      }
    })
  })
})

// logout
router.get('/logout', (req, res, next) => {
  res.clearCookie('user_name');
	res.redirect('http://localhost:3000/');
});


module.exports = router;
