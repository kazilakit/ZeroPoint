/**
 * Created by Lakit on 29-01-17.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multiParty = require('connect-multiparty');

var multipartMiddleware = multiParty();

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller')

mongoose.connect('mongodb://localhost:27017/zero-point');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function (req, res) {
    res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);

app.listen('3000',function () {
    console.log("Listening for Local Host 3000");
});
