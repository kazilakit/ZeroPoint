/**
 * Created by Lakit on 04-02-17.
 */

var User = require('../datasets/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function (req, res) {
    var userId = req.body.userId;
    var file = req.files.file;
    console.log(userId);

    console.log("User " + userId + " is uploading ",file);

    var uploadDate = new Date().toISOString();

    uploadDate = uploadDate.replace(/[^a-zA-Z0-9]/g, "");

    var savePath = "../../upload/" + userId + uploadDate + file.name
    var tempPath = file.path;
    var targetPath = path
                     .join(__dirname, savePath);

    fs.move(tempPath, targetPath, function (err) {
       if(err){
           console.log(err);
       } else {
           User.findById(userId, function (err, userData) {
               var user = userData;
               user.image =  savePath;
               user.save(function (err) {
                   if(err){
                       console.log(err);
                       res.json({status: 500});
                   }else {
                       console.log("Save Successful");
                       res.json({status: 200});
                   }
               });

           });
       }
    });


};

module.exports.updateUserName =  function (req, res) {
    var userName = req.body.userName;
    var userId = req.body.userId;

    console.log(userName);

    User.findById(userId, function (err, userData) {
        var user = userData;
        user.userName = userName;

        user.save(function (err) {
            if(err){
                console.log(err);
                res.json({status: 500});
            }else {
                console.log('success');
                res.json({status: 200});
            }
        });
    })
};
