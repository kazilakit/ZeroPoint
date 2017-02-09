/**
 * Created by Lakit on 29-01-17.
 */
var mongoose=require('mongoose');

module.exports=mongoose.model('User',{
    email: String,
    password: String,
    image: String
});