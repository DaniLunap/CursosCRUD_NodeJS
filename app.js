const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

// motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//rutas
app.use('/cursos', require('./routes/cursos'));

app.get('/', (req, res) => res.redirect('/cursos'));


app.listen(3000, () => console.log('Inicio correctamente en http://localhost:3000'))