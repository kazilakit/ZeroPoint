/**
 * Created by kazi_ on 3/4/2017.
 */
var mongoose = require("mongoose");

module.exports = mongoose.model("Feed",{
    user: String,
    userId: String,
    image: String,
    content: String,
    date: {type:Date,default:Date.now()}

});