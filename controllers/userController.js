const mysql = require('../database/mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.inserUser = async ( req, res, next ) => {

        try{
                var query = `SELECT * FROM tb_users WHERE email = ?`;
                var result = await mysql.execute(query, [req.body.email]);

                if(result.length > 0) {
                    return res.status(409).send({messagem: "Usuário já cadastrado"})
                }

                const hash = await bcrypt.hashSync(req.body.password, 10);

                query = `INSERT INTO tb_users(name, email, password) VALUES (?,?,?)`;
                const results = await mysql.execute(query, [req.body.email, hash]);

                const response = {
                    messagem: "Usuário criado com sucesso",
                    createdUser: {
                        userId: results.insertId,
                        email: req.body.email
                    }
                }
                return res.status(201).send(response);
        } catch (error) {
            return res.status(500).send({ error: error})
        }
}