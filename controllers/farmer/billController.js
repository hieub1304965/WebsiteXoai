var express = require('express');
var billController = express.Router();
var appservice = require('../../appservice');

// them ,appservice.ensureAuthenticated vao moi controller truoc khi render ejs
billController.get('/danhsach',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/bill/billList',{title:'Hoá đơn'});
});
billController.get('/themhoadon',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/bill/addBill',{title:'Thêm hoá đơn'});
})
module.exports = billController;