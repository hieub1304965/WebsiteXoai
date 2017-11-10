var express = require('express');
var technicalController = express.Router();
var appservice = require('../../appservice');

// Kỹ thuật trồng
technicalController.get('/kythuat',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/technical/technical', {
        title:'Kỹ thuật trồng'
    });
});

//Thêm kỹ thuật trồng
technicalController.get('/themkythuat',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/technical/addTechnical',{
        title:'Thêm kỹ thuật'
    });
});

module.exports = technicalController;