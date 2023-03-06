const JokeController = require('../controllers/joke.controller')

module.exports = (app) => {
    // Test
    app.get('/api/test', JokeController.testApi)
    
    // Display All
    app.get("/api/jokes", JokeController.allJokes)
    
    // Display One
    app.get("/api/jokes/:id", JokeController.oneJoke)

    // Create One
    app.post("/api/jokes/new", JokeController.addJoke)
    
    // Update One
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    
    // Delete One
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)

}