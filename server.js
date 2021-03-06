let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let matiere = require('./routes/matieres');
let mongoose = require('mongoose');
<<<<<<< HEAD
const details = require('./routes/details');
=======
let users = require('./routes/users');
>>>>>>> 79dbc4395d8f7bcef3b6a1ac40cec7b11ee8cbb9

mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
//const uri = 'mongodb+srv://rossia:rossia@cluster0.4n42q.mongodb.net/assignments?retryWrites=true&w=majority';
const uri = 'mongodb+srv://ras:ras@cluster0.cpsrb.mongodb.net/assignments?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://rossia:<rossia>@cluster0.4n42q.mongodb.net/assignments?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,Access-Control-Allow-Headers");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
  .get(assignment.getAssignments)
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);


app.route(prefix + '/matiere')
    .post(matiere.postMatiere)
    .get(matiere.getMatieres);

app.route(prefix + '/matiere/:id')
    .get(matiere.getMatiere);

app.route(prefix +'/details/:id').get(details.getDetails);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);

 
app.route(prefix + '/users')
.get(users.getUsers);

app.route(prefix + '/user/:id')
  .get(users.getUser);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;