var express = require('express');
var passport =  require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');
var router = express.Router();

//Lay duong dan route con
var farmer = require('./farmer');
//Dan toi thu muc khac
router.use('/nongdan', farmer);




module.exports = router;