const Curso = require('../models/Curso');

exports.index = (req, res) => { 
    Curso.getAll((err, cursos) => {
        if (err) {
            return res.status(500).send('error al obtener los cursos');
        }
        res.render('index', { cursos });
    });
};

// CREAR
exports.nuevo = (req, res) => {
    Curso.getAll((err, cursos) => {
        if (err) {
            return res.status(500).send('Error al crear');
        }
        res.render('form', { curso: null, accion: 'crear', cursos });
    });
};

exports.crear = (req, res) => {
    const { nombre_curso, instructor, creditos, cupo_maximo } = req.body;
    Curso.create({ nombre_curso, instructor, creditos, cupo_maximo }, (err) => {
        if (err) {
            return res.status(500).send('error al crear curso');
        }
        res.redirect('/cursos');
    });
};

// EDITAR
exports.editar = (req, res) => {
    Curso.getById(req.params.id, (err, rows) => {
        // Corrección de .length
        if (err || rows.length === 0) {
            return res.status(404).send('curso no encontrado');
        }
        Curso.getAll((err, cursos) => {
            // Corrección: cambiamos err2 por err
            if (err) {
                return res.status(500).send('Error');
            }
            res.render('form', {
                curso: rows[0],
                accion: 'editar',
                cursos
            });
        });
    });
};

exports.actualizar = (req, res) => {
    const { nombre_curso, instructor, creditos, cupo_maximo } = req.body;
    
    // Le pasamos el ID, el objeto con los datos y el callback para redireccionar
    Curso.update(req.params.id, { nombre_curso, instructor, creditos, cupo_maximo }, (err) => {
        if (err) {
            console.error("❌ Error de MySQL al actualizar:", err);
            return res.status(500).send('Error al actualizar');
        }
        res.redirect('/cursos');
    });
};

exports.eliminar = (req, res) => {
    Curso.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).send('Error al eliminar curso');
        }
        res.redirect('/cursos');
    });
};