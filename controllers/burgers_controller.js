var express = require('express');
var router = express.Router();
var burger = require('../routes/api-routes.js');


router.use(function(req, res, next){
	
	next();
})

router.get('/', function (req, res) {
	res.redirect('/burgers');
	
});
//reading db and with index file it renders data
router.get('/burgers', function (req, res) {
	burger.read(function (data) {

		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
	
});

router.post('/burgers/add', function (req, res) {
	
	burger.insert(req.body.burger_name, function () {
		res.redirect('/burgers');
		
	});
});

router.put("/devoured", function (req, res) {
	
	burger.update(req.body.devoured, function () {
		res.redirect('/burgers');
	});
});

router.delete("/:id", function(req, res){
	

	burger.delete(req.params.id, function (){
		res.redirect("/");
	});
});

module.exports = router;