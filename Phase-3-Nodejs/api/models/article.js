
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mogoodb://localhost:27017/ERPApp');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    author: String,
});

module.exports = mongoose.model('Article', articleSchema);
