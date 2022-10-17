const express = require('express');
const app = express();

//On voit que juste cette ligne permet la mise en place d'un serveur de
// fichier statique, via le middleware express.static
app.use(express.static('public'));

//Et pour démarrer un serveur web qui écoute sur le port 7777, ces lignes sont suffisantes
const PORT = 7777;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});