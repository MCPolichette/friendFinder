// user data saved in objects on this page, 
var users = [
    {
        "name": "Fred",
        "photo": "http://allthatsinteresting.com/wordpress/wp-content/uploads/2013/08/odd-photos-koskimo.jpg",
        "scores": [
            1,
            2,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            1
        ]
    }, {
        "name": "Adrian",
        "photo": "https://i.pinimg.com/736x/f0/1e/29/f01e29d9272c96a73a1514c5ee5224a4--odd-couples-stupid-stuff.jpg",
        "scores": [
            5,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            4,
            5
        ]
    }, {
        "name": "Taylor",
        "photo": "https://i.pinimg.com/originals/5c/29/40/5c2940293bdee8e648628dbf8e53a974.jpg",
        "scores": [
            3,
            4,
            4,
            2,
            2,
            2,
            2,
            3,
            3,
            4
        ]
    }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = users;
