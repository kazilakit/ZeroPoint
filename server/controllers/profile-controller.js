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
};
