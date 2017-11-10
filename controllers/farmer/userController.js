var express = require('express');
var config = require('../../config/config');
var moment = require('moment');
var appservice = require('../../appservice');

var userController = express.Router();



userController.get('/thongtin/:userId',appservice.ensureAuthenticated,function(req, res){
    var userId = req.params.userId;
    var userFullname = req.session.userFullname;
    var user = req.user;
    //var sessData = req.session;
    //sessData.userFullname = data.message.USER_FULLNAME;
    console.log(JSON.stringify(req.userid));
    res.render('farmer/user/info',
        {
            title:'Thông tin cá nhân', 
            userId:userId,
        }
    );
});

userController.get('/doimatkhau/:userId',appservice.ensureAuthenticated, function(req, res){
    var userId = req.params.userId;
    var conf = 'http://quantrac.com:8001/';
    res.render("farmer/user/changePassword",
        {
            title:'Cập nhật mật khẩu',
            userId:userId,
            conf:conf,
        }
    );
});
module.exports = userController;
