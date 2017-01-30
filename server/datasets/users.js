/**
 * Created by Kazi Lakit on 1/29/2017.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    email: String,
    password: String
});
