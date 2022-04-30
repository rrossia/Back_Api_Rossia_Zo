let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DetailsSchema = Schema({
    idAssignment: Number,
    dateDeRendu: Date,
    nomDevoir: String,
    rendu: Boolean,
    auteur:String,
    note:Number,
    remarques:String,
    matieresid:String,
    nomMatiere:String,
    image:String,
    prof:String
})

module.exports = mongoose.model('details', DetailsSchema);