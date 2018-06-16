
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mogoodb://localhost:27017/ERPApp');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('User', userSchema);
