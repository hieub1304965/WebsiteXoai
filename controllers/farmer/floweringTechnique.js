var express = require('express');
var floweringTechnicalController = express.Router();
var appservice = require('../../appservice');

// Kỹ thuật trồng
floweringTechnicalController.get('/taotanvatiacanh',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/floweringTechnical/taotanvatiacanh', {title:'Tạo tán và tỉa cành'})
});

//Biện pháp kích thích ra hoa đợt mới
floweringTechnicalController.get('/bienphapkichthichrahoadotmoi',appservice.ensureAuthenticated, function(req, res){
    res.render('farmer/floweringTechnical/bienphapkichthichrahoadotmoi', {title:'Biện pháp kích thích ra hoa đợt mới'})
});

//Tạo mầm hoa
floweringTechnicalController.get('/taomamhoa',appservice.ensureAuthenticated,function(req, res){
    res.render('farmer/floweringTechnical/taomamhoa', {title:'Tạo mầm hoa'})
});

//Bao trái
floweringTechnicalController.get('/baotrai',function(req, res){
    res.render('farmer/floweringTechnical/baotrai', {title:'Bao trái'})
});
module.exports = floweringTechnicalController;