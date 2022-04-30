let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = Schema({
    id:String,
    login:String,
    password:String,
    profil:String
})

module.exports = mongoose.model('users', UsersSchema);