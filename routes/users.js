let Users = require('../model/users');


// Récupérer tous les users (GET)
function getUsers(req, res){
    Users.find((err, users) => {
        if(err){
            res.send(err)
        }

        res.send(users);
    });
}

// Récupérer un user par son id (GET)
function getUser(req, res){
    let userId = req.params.id;

    Users.findOne({id: userId}, (err, users) =>{
        if(err){res.send(err)}
        res.json(users);
    })
}



module.exports = { getUser, getUsers };
