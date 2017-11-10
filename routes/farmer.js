var express = require('express');
var farmerRouter = express.Router();

var havestController = require ('../controllers/farmer/havestController');
var billController = require ('../controllers/farmer/billController');
var userController = require('../controllers/farmer/userController');
var careController = require('../controllers/farmer/careController');
var farmyardController = require('../controllers/farmer/farmyardController'); 
var technical = require('../controllers/farmer/technical');
var floweringTechnique = require('../controllers/farmer/floweringTechnique');
var appservice = require('../appservice');

farmerRouter.get('/',appservice.ensureAuthenticated, function(req, res){
     var userId = req.user;
    // var option = {
    //     url: 'http://quantrac.com:8001/webservice/farmer/'+userId,
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     method: 'GET',
    //   };
    // appservice.get(option,function(error,result){
    //     var data = result.message;
    //    var dataUser = JSON.parse(data);
    //    req.session.username = dataUser.USER_FULLNAME;
    // }); // comment

    res.render('farmerLayout',
        {
            title:'Trang chủ',
           // username:  req.session.username
        }
    ); // nay ha nos do
});
//Farmyard Controller
farmerRouter.use('/dattrong', farmyardController);

//care Controller
farmerRouter.use('/chamsoc', careController);

//Havest Controller
farmerRouter.use('/thuhoach', havestController);

//Bill Controller
farmerRouter.use('/chitieu', billController);

//User Controller
farmerRouter.use('/user', userController);

//technical
farmerRouter.use('/kythuattrong', technical);

//Kỹ thuật xử lý ra hoa
farmerRouter.use('/xulyrahoa', floweringTechnique);
module.exports = farmerRouter;