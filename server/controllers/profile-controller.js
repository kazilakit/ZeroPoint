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
    uploadDate = uploadDate
                    .replace(".", "")
                    .replace("-","")
                    .replace(":", "");


    var tempPath = file.path;
    var targetPath = path
                     .join(__dirname, "../../upload/" + userId + uploadDate + file.name);

    console.log(uploadDate);
    console.log(tempPath);
    console.log(targetPath);
    fs.rename(tempPath, targetPath, function (err) {
       if(err){
           console.log(err);
       } else {
           console.log("File Moved");
       }
    });
};
