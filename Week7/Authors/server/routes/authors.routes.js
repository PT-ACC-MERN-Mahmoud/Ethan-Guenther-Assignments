const AuthorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.get('/api/authors/:id', AuthorController.getById)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}