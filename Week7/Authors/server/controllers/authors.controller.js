const Author = require("../models/authors.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)

    .then(newAuthor => {
        console.log(newAuthor);
        res.json({newAuthor});
    })
    .catch((err) => {res.status(400).json(err)})
}

module.exports.getAllAuthors = (req, res) => {
    Author.find()

    .then(getAll => {
        console.log(getAll);
        res.json(getAll);
    })

    .catch((err) => res.json(console.log("There was an issue grabbing all authors", err)))
}

module.exports.getById = (req, res) => {
    Author.findOne({_id: req.params.id})

    .then((authorById) => {
        console.log(authorById);

        res.json(authorById);
    })

    .catch((err) => console.log("There was an error grabbing author by Id", err))
}


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})

    .then((results) => {
        console.log(results)
        res.json(results)
    })

    .catch((err) => console.log("There was an issue deleting an author", err))
    
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new: true, runValidators: true,
    })

    .then((updatedAuthor) => {
        console.log(updatedAuthor)
        res.json(updatedAuthor)
    })

    .catch(err => res.status(400).json(err))

}


