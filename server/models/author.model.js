const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name is required"],
        minlength:[3, "Authos's name should be more than charcter"]
    
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);