const { Author} = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
    console.log("this was raached ")
}

module.exports.createAuthor= (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author=> response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getAuthors = (request, response) => {
    Author.find({}).sort({name:'ascending'})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}
module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
