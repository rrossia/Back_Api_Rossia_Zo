let Details = require('../model/details');
let Matiere = require('../model/matiere');
let Assignment = require('../model/assignment');


function getDetails(req,res){
    let details = new Details();
    let idAssignments= req.params.id;
    Assignment.findOne({id: idAssignments}, (err, assignment) =>{
        if(err){res.send(err)}
        Matiere.findOne({id:assignment.matieresid},(errM, matiere)=>{
            if(errM){res.send(errM)}
            res.json({idAssignement:`${assignment.id}`,nomDevoir:`${assignment.nom}`,rendu:`${assignment.rendu}`,auteur:`${assignment.auteur}`,note:`${assignment.note}`,remarques:`${assignment.remarques}`,matieresid:`${assignment.matieresid}`,nomMatiere:`${matiere.nom}`,image:`${matiere.image}`,prof:`${matiere.prof}`});
        })
    });
}


/*function getDetails(req,res){
    let details = new Details();
    //on recupere l'id d'assignment
    let assignmentId = req.params.id;
    console.log("ito le id");
    console.log("tafiditra ato ve");
    //on recupere l'assignement
    const assignment = app.route(prefix + '/assignments/:'+assignmentId).get(assignment.getAssignment);
    //on recupere le matiere, à partir de l'id de matieres dans l'assignment
    const mat = Matiere.findOne(Number(assignment.matieresId));
    details.idAssignement = assignmentId;
    details.dateDeRendu = assignment.dateDeRendu;
    details.nomDevoir = assignment.nom;
    details.rendu = assignment.rendu;
    details.auteur = assignment.auteur;
    details.note = assignment.note;
    details.remarques = assignment.remarques;
    details.matieresid=assignment.matieresid;
    details.nomMatiere=mat.nom;
    details.image = mat.image;
    details.prof = mat.prof;
    res.json(details);

    
}

//et on retourne le detailsn*/
module.exports = {getDetails};
    