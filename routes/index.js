var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport =  require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');

//Lay duong dan route con
var farmer = require('./farmer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nút đăng nhập' });
});

router.get('/login', function(req, res){
  res.render('login',{title:'Đăng nhập'});
});
//router.get('/admin', function(req,res){
  // gọi isAuthenticated nếu đã xác thực thành công 
  // thì cho dô route admin còn chưa xác thực thì chuyển qua trang đăng nhập
  // tương tự cho các route khác cần xác thực
  
  // if(req.isAuthenticated()){
  //   res.send('passport xac thuc thanh cong');
  // } else {
  //    res.redirect('/login');
  // }
// }); comment trang chu admin la route nao /


module.exports = router;
