const Joke = require("../models/joke.model")


// Test
module.exports.testApi = (req, res) => {
    res.json({Status: 'Im looking good capt.'})
}

// Read All
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then((jokes) => res.json(jokes) )
    .catch((err) => res.json(err))
}

// Read One
module.exports.oneJoke = (req, res) => {
    const idFromParams = req.params.id
    Joke.findOne({_id: idFromParams})
    .then((one) => res.json(one))
    .catch((err) => res.json(err))
}

// Create One
module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json(newJoke))
    .catch(err => res.json(err))
}

// Update One
module.exports.updateJoke = (req, res) => {
    const idFromParams = req.params.id
    const updateValue = req.body
    Joke.findOneAndUpdate({_id: idFromParams}, updateValue, {new: true})
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => res.json(err))
}

// Delete One
module.exports.deleteJoke = (req, res) => {
    //     const idFromParams = req.params.id
    Joke.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch((err) => res.json(err))
}