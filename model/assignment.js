let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur:String,
    note:Number,
    remarques:String,
    matieresid:String
});

//ajout de la pagination 
AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
//assignments collection dans bd
module.exports = mongoose.model('assignments', AssignmentSchema);