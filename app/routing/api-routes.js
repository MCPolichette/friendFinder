var friend_data = require('..app/data/friends.js');
var path = require('path');

module.exports = function (app) {

    // Displays all possible friends as a JSON string
    app.get("/api/friends", function (req, res) {
        res.json(friend_data);
    });

    // Create New Friend - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        console.log("API Recieved")
        var user = req.body;
        // creating variables to compare scores
        var user_scores = user.scores;

        var score_array = [];
        function bestMatch() {
            var best_match = 0;
            // for-loop goes through current friends data to compare scores
            for (var i = 0; i < friend_data.length; i++) {
                var score_difference = 0;
                console.log(friend_data[i].scores)

                for (j = 0; j < user_scores.length; j++) {
                    score_difference = score_difference + (Math.abs(parseInt(friend_data[i].scores[j]) - parseInt(user_scores[j])));
                    console.log("user" + user_scores[j]);
                    console.log(score_difference + "scoredifference");
                };

                score_array.push(score_difference);
                console.log(score_array + " SCORE ARRAY")
            }
            for (var i = 0; i < score_array.length; i++) {
                if (score_array[i] <= score_array[best_match]) {
                    best_match = i;
                }
            }
            console.log(best_match)
            return best_match;
        }


        var bestFriend = friend_data[bestMatch()]
        res.json(bestFriend);
        friend_data.push(user);

    });
}
