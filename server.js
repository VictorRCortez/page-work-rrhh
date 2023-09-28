 
const express  = require('express');
const cors = require("cors");
const app = express();
const path = require('path')

//middlewares
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});