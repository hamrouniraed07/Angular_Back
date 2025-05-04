const express = require('express');
const database = require('./src/database/db.config');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const teamRouter = require('./src/api/routes/team');
app.use(teamRouter)

// Connexion à MongoDB
database.mongoose.connect(database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connecté à MongoDB');
})
.catch(err => {
  console.error('Erreur de connexion MongoDB :', err);
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello, World' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
