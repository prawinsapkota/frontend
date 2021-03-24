var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next){
    res.render('signup');
});
    
router.get('/nav', function(req, res, next){
    res.render('navbar');
});

    
router.get('/foot', function(req, res, next){
    res.render('footer');
});


router.get('/addevent', function(req, res, next){
    res.render('addevent');
});

router.get('/viewevent', function(req, res, next){
    res.render('viewevents');
});

router.get('/updateevent', function(req, res, next){
    res.render('updateevents');
});


router.get('/about', function(req, res, next){
    res.render('about');
});

router.get('/help', function(req, res, next){
    res.render('help');
});

router.get('/adminsignup', function(req, res, next){
   res.render('adminsignup'); 
});

router.get('/admindashboard', function(req, res, next){
   res.render('admindashboard'); 
});

router.get('/adminhelp', function(req, res, next){
   res.render('adminhelp'); 
});


router.get('/adminviewrequest', function(req, res, next){
   res.render('adminviewrequest'); 
});


router.get('/adminnotice', function(req, res, next){
    res.render('adminnotice'); 
 });




//clientspart
router.get('/clientdashboard', function(req, res, next){
   res.render('clientdashboard'); 
});



router.get('/requestevent', function(req, res, next){
   res.render('requestevent'); 
});

router.get('/clientabout', function(req, res, next){
    res.render('clientabout'); 
 });

 router.get('/clientnotice', function(req, res, next){
    res.render('clientnotice'); 
 });

router.get('/displayrequestevent', function(req, res, next){
   res.render('clientview'); 
});


module.exports = router;
