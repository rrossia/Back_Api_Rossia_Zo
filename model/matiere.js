let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    id:String,
    nom:String,
    image:String,
    prof:String
})

module.exports = mongoose.model('matiere', MatiereSchema);