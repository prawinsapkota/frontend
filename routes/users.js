var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/client/home', function(req, res, next){
   res.render('/client/viewevent'); 
    
});

module.exports = router;
