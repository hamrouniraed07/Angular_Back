const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

const db = {};
db.mongoose = mongoose;
db.url = config.DB_URL;

// Si tu veux charger un model (team), assure-toi que team.js exporte une fonction ou modifie cette ligne
// db.posts = require('../api/models/team')(mongoose); // ← à ajuster selon ton export
// OU si `team.js` exporte un modèle directement :
db.Team = require('../api/models/team'); // ← nom du modèle

module.exports = db;
