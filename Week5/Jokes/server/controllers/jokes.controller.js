const Joke = require("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ allJokes })
        })
        .catch((err) => console.log(err));
}
 
module.exports.getJokeById = (req, res) => {
    Joke.findById(req.params.id )
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
        };
 
module.exports.createJoke = (req, res) => {

    Joke.create(req.body)
        .then((newJoke) => {
            res.json({ newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });};
 
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => {
            res.json({ updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });};
 
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch(err => console.log(err));
};