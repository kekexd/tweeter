"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now(),
      like: 0
    };

    DataHelpers.saveTweet(tweet, (err, newTweet) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(newTweet);
      }
    });
  });

  //route to update the number of likes
  tweetsRoutes.put("/:tweetId/like", function(req, res) {
    DataHelpers.likeTweet(req.params.tweetId, (err, res) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log('updated');
      }
    });
    
  })


  return tweetsRoutes;

}
