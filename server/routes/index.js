var express = require('express');
var router = express.Router();
var data= require('../data/users.json')
var saveData=[]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/users', function(req, res, next) {
 res.send(data)
});

/* GET home page. */
router.get('/users/login', function(req, res, next) {
  console.log(req.body,req.params,req.query)
   let got= data.filter(row=>{
     if(row.id==req.query.password && row.login==req.query.user){
      return true;
     }
   })
   if(!got || !got.length){

     return res.send({ok:false,message:"user not found"})
   }
   if(got && got.length>1){
    return res.send({ok:false,message:"more than one user"})
   }
   res.send({ok:true,message:"found"})
});



module.exports = router;
