var express = require('express');
var havestController = express.Router();
var appservice = require('../../appservice');

havestController.get('/danhsach',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/havest/havestList',{title: 'Danh sách thu hoạch'});
});

havestController.get('/themthuhoach',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/havest/addHavest',{title: 'Thêm thu hoạch'});
});

havestController.get('/xemchitietthuhoach',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/havest/updateHavest', {title: 'Xem chi tiết thu hoạch'});
});
module.exports = havestController;