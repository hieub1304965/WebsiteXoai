var express = require('express');
var careController = express.Router();
var appservice = require('../../appservice');
//Xem vô gốc và bồi líp
careController.get('/xemvogocvaboilip',function(req, res){
    res.render('farmer/care/xemvogocvaboilip',{
        title: 'Vô gốc và bồi líp'
    });
});

//Cập nhật
careController.get('/capnhatvogocvaboilip',function(req, res){
    res.render('farmer/care/capnhatvogocvaboilip',{
        title: 'Vô gốc và bồi líp'
    });
});


//Quy trình bón cho một mùa vụ
careController.get('/quytrinhbonchomotvu', function(req, res){
    res.render('farmer/care/quytrinhbonchomotvu',{
        title: 'Quy trình bón cho một vụ'
    });
});

//cập nhật quy trình bón cho một vụ
careController.get('/capnhatquytrinhbonchomotvu', function(req, res){
    res.render('farmer/care/capnhatquytrinhbonchomotvu',{
        title: 'Quy trình bón cho một vụ'
    });
});

//Phân bón sử dụng
careController.get('/phanbon', function(req, res){
    res.render('farmer/care/danhsachphanbon', {
        title:"Danh mục phân bón"
    });
});

//Thêm phân bón
careController.get('/themphanbon',function(req, res){
    res.render('farmer/care/themphanbon', {
        title:"Phân bón"
    });
});

//Sâu gây hại
careController.get('/saugayhai',function(req, res){
    res.render('farmer/care/saugayhai', {
        title:'Sâu gây hại'
    });
});

//Bệnh gây hại
careController.get('/benhgayhai', function(req, res){
    res.render('farmer/care/benhgayhai', {
        title:'Bệnh gây hại'
    });
});

//Thêm bệnh gây hại
careController.get('/thembenhgayhai', function(req, res){
    res.render('farmer/care/thembenhgayhai', {
        title:'Thêm bệnh gây hại'
    });
});
module.exports = careController;