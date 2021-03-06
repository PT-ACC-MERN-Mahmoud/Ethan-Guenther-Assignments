const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:id", JokeController.getJokeById);
    app.put("/api/jokes/:id",JokeController.updateJoke);
    app.delete("/api/jokes/:id",JokeController.deleteJoke);
};