/**
 * Created by Lakit on 29-01-17.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    email: String,
    userName: String,
    password: String,
    bio: String,
    image: String
});