const mysqly = require('mysql2')

const db = mysqly.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_cursoacademico'
});

db.connect((err) => {
    if(err){
        console.error('Error en la conexion a la bd: ', err.message);
        return;
    }
    console.log('Conectado con MySql');
});

module.exports = db;