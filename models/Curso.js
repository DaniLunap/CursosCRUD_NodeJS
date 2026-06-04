const db = require('../config/db');

class Curso {
    static getAll(callback){
        const sql = `
            SELECT xc.*, xc.nombre_curso AS nombre_curso
            FROM cursos xc
        `
        db.query(sql, callback);
    }

    static getById(id, callback){
        const sql = `
            SELECT xc.*, xc.nombre_curso AS nombre_curso  
            FROM cursos xc
            WHERE xc.id = ?
        `
        db.query(sql, [id], callback);
    }

    static create(data, callback){
        const sql = `INSERT INTO cursos (nombre_curso, instructor, creditos, cupo_maximo) VALUES (?, ?, ?, ?)`;
        db.query(sql, [data.nombre_curso, data.instructor, data.creditos, data.cupo_maximo], callback);   
    }

    // ✨ CORREGIDO: Ahora recibe el ID dentro del array y ejecuta el callback al final
    static update(id, data, callback){
        const sql = `UPDATE cursos SET nombre_curso=?, instructor=?, creditos=?, cupo_maximo=? WHERE id=?`;
        db.query(sql, [data.nombre_curso, data.instructor, data.creditos, data.cupo_maximo, id], callback);
    }

    static delete(id, callback){
        db.query(`DELETE FROM cursos WHERE id=?`, [id], callback)
    }
}

module.exports = Curso;