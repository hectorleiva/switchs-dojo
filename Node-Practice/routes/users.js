var express = require('express');
var router = express.Router();
var db = require('../db')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  var udate = await db.query ('select user_name, first_name, id from users')
  
  res.send(udate.rows);
});

//Respond to a PUT request to the /user route:
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

//Respond to a DELETE request to the /user route:
router.delete('/user', async(req, res) => {
  console.log(req.body)
  var udate = await db.query (`delete from users where user_name = '${req.body.user_name}'`)
  res.send('Got a DELETE request at /user')
});


router.post('/user', async(req, res) => {
var udate = await db.query (`insert into users (user_name, first_name) values ('${req.body.user_name}', '${req.body.first_name}')`)

  res.send('Got a POST request at /user')
});

module.exports = router;