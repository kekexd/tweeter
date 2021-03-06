"use strict";

const ObjectId = require('mongodb').ObjectID;

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, newTweet);
    },

    //Update the number of likes in `db`
    likeTweet: function(tweetId, callback) {
      db.collection("tweets").updateOne({'_id': ObjectId(tweetId)}, { $inc: { "like": 1}});
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }

  };
}
