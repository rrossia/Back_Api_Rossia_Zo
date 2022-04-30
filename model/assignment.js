let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur:String,
    note:Number,
    remarques:String,
    matieres_id:String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
//assignments collection dans bd
module.exports = mongoose.model('assignments', AssignmentSchema);