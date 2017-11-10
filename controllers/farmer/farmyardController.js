var express = require('express');
var farmeryardController = express.Router();
var appservice = require('../../appservice');
farmeryardController.get('/danhsach',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/farmyard/farmyardList',{
        title:'Đất trồng'
    });
});

farmeryardController.get('/themdattrong',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/farmyard/addFarmyard', {
        title:'Thêm đất trồng'
    });
});

farmeryardController.get('/capnhatdattrong',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/farmyard/updateFarmyard', {
        title:'Thêm đất trồng'
    });
});
module.exports = farmeryardController;