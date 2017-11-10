var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');


//Init app
var app = express();
//var server = require('http').Server(app)
//var io = require('socket.io')(server);

//Lấy đường dẫn các route
var index = require('./routes/index');
// var users = require('./routes/users');
var quantrac = require('./routes/quantrac');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');// view engine setup
app.set('port',process.env.PORT|| 3000);
//Logger Middleware
app.use(logger('dev'));
app.use(bodyParser.json());//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//Set static folder
app.use(session({
	secret:'secret',
	saveUninitialized: true,
	resave:true
}));//Express session
app.use(passport.initialize());//Passport init
app.use(passport.session());

app.route('/login').post(
  passport.authenticate('local',
    {
      successRedirect: 'quantrac/nongdan',
      failureRedirect: 'login'
    })
);
app.route('/logout').get(function(req,res){
  req.logout();
   res.redirect('/login');
});
passport.use(new LocalStrategy(function(username, password,done){

  var data = {
    username:username,
    password:password
  };
  var option = {
    url: 'http://quantrac.com:8001/webservice/login',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    form:data
  };
  request.post(option,function(error,response,body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      var userid = data.message.USER_ID;
      return done(null,userid);
    } else {
      return done(null, false);
    }
  });

}));
passport.serializeUser(function(userid,done){
    done(null,userid);
});
passport.deserializeUser(function(userid,done){
  var option = {
    url: 'http://quantrac.com:8001/webservice/farmer/'+userid,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
  };
  request.get(option,function(error,response,body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      //console.log(data);
      var userid = data.message.USER_ID;
     
      return done(null,userid);
    } else {
      return done(null, false);
    }
  
});

});




//Express validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//     var namespace = param.split('.')
//     ,root = namespace.shift()
//       ,formParam = root;
//       while(namespace.length) {
//         formParam += '[' + namespace.shift() + ']';
//       }
//       return {
//         param : formParam,
//         msg   : msg,
//         value : value
//       };
//   }
// })); // comment lai
app.use(flash());//Connect flash
app.use('/',index);
app.use('/quantrac', quantrac);
//app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app set
app.listen(app.get('port'), function(){
  console.log("Server started on http://quantrac.com:"+ app.get('port'));
});


module.exports = app;
