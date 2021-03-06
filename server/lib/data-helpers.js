"use strict";

// Simulates the kind of delay we see with network or filesystem operations

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
    return {

        saveTweet: function(newTweet, callback) {
            db.collection("tweets").insertOne(newTweet);
            callback(null, true);
        },

        // Get all tweets in `db`, sorted by newest first
        getTweets: function(callback) {
            const sortNewestFirst = (a, b) => a.created_at - b.created_at;
            db.collection("tweets").find().toArray(function(err, results) {
                callback(null, results.sort(sortNewestFirst));
            });
        }
    };
};