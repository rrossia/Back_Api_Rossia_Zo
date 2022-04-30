let Matiere = require('../model/matiere');


function postMatiere(req,res){
    let matiere = new Matiere();
    matiere.id = req.body.id;
    matiere.nom = req.body.nom;
    matiere.image = req.body.image;
    matiere.prof = req.body.prof;

    matiere.save((err)=>{
        if(err){
            res.send('cant post matiere ',err );
        }
        res.json({message:`${matiere.nom} saved!`})
    })

}

function getMatieres(req, res){
    Matiere.find((err, matieres) => {
        if(err){
            res.send(err)
        }

        res.send(matieres);
    });
}

//find avec GET
function getMatiere(req, res){
    let matieretId = req.params.id;

    Matiere.findOne({id: matieretId}, (err, mat) =>{
        if(err){res.send(err)}
        res.json(mat);
    })
}

module.exports = {  postMatiere ,getMatieres,getMatiere};
