/**
 * Created by kazi_ on 3/4/2017.
 */

var Feed = require('../datasets/feed');

module.exports.postFeed = function (req, res) {
    //console.log(req.body);
    var feed = new Feed(req.body);
    //feed.save();
    Feed.create(feed, function (error) {

        if(error){
            console.log(error);
        }
        else {
            Feed.find({}).sort({date: -1}).exec(function (err, response) {
                if (err) {
                    res.error(err);
                }
                else {
                    console.log(response);
                    res.json(response);
                }

            });
        }
    });

}

module.exports.getFeeds = function (req, res) {
    Feed.find({})
        .sort({date:-1})
        .exec(function (err, response) {
            if(err){
                res.error(err);
            }
            else {
                //console.log(response)
                res.json(response);
            }
    });
}
