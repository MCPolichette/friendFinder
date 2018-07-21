// user data saved in objects on this page, 
var users = [
    {
        "name": "Fred",
        "photo": "http://allthatsinteresting.com/wordpress/wp-content/uploads/2013/08/odd-photos-koskimo.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, {
        "name": "Adrian",
        "photo": "https://i.pinimg.com/736x/f0/1e/29/f01e29d9272c96a73a1514c5ee5224a4--odd-couples-stupid-stuff.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = users;
