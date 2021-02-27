const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/author',AuthorController.getAuthors),
    app.post('/api/author',AuthorController.createAuthor),
    app.put('/api/author/:id',AuthorController.updateAuthor),
    app.delete('/api/author/:id',AuthorController.deleteAuthor),
    app.get('/api/author/:id', AuthorController.getOneAuthor)
}
