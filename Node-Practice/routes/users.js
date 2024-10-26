var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Respond to a PUT request to the /user route:
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

//Respond to a DELETE request to the /user route:
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

module.exports = router;
