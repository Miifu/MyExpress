var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Kukkuluuruu!");
});

//Middleware-funktio
router.use(function (req, res, next){
  console.log("Olen välivehje 1!");
  next();
});

//GET-metodi
router.get ('/toka',function(req, res)
{
  res.send("Olenpa toka hyvinkin");
  console.log("Tokapa tietenkin");
});

//Middleware-funktio 2
router.use(function (req, res, next){
  console.log("Olen välivehje 2!");
  next();
});

// GET-metodi yhdellä parametrilla
router.get ('/kolmas/:nimi',function(request, response)
{
  response.send("Olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);
});

//Middleware-funktio 3
router.use(function (req, res, next){
  console.log("Olen välivehje 3!");
  next();
});

// GET-metodi kahdella parametrilla
router.get ('/neljas/:etunimi/:sukunimi',function(request, response)
{
  response.send("Olenpa vaan "+request.params.etunimi+" "+request.params.sukunimi);
//  console.log(request.params.nimi);
});

//POST-metodi
router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
