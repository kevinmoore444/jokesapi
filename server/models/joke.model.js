const mongoose = require("mongoose")

// Create database table (called collections in MongoDb)
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String, 
        required: [true, "Joke Setup required"],
        minLength: [10, "Setup must be 10 characters Long"]
    },
    punchline: {
        type: String,
        required: [true, "Please add a punchline"],
        minLength: [3, "Punchline must be 3 characters Long"]
    },
}, {timestamps: true})

module.exports = mongoose.model('Song', JokeSchema)



