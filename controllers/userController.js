const mysql = require('../database/mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');


exports.inserUser = async ( req, res, next ) => {

        try{
                var query = `SELECT * FROM tb_users WHERE email = ?`;
                var result = await mysql.execute(query, [req.body.email]);

                if(result.length > 0) {
                    return res.status(409).send({messagem: "Usuário já cadastrado"})
                }

                const hash = await bcrypt.hashSync(req.body.password, 10);

                query = `INSERT INTO tb_users(name, email, password) VALUES (?,?,?)`;
                const results = await mysql.execute(query, [req.body.name, req.body.email, hash]);

                const response = {
                    mensagem: "Usuário criado com sucesso",
                    createdUser: {
                        userId: results.insertId,
                        email: req.body.email
                    }
                }
                return res.status(201).send(response);
        } catch (error) {
            return res.status(500).send({ error: error})
        }
};

exports.Login = async (req, res, next) => {

        try{
            const query = `SELECT * FROM tb_users WHERE email = ?`;
            var results = await mysql.execute(query, [req.body.email]);

            if(results.length < 1){
                return res.status(401).send({mensagem: 'Falha na autenticação'})
            }

            if (await bcrypt.compareSync(req.body.password, results[0].password)) {
                const token = jwt.sign({
                    userId: results[0].userId,
                    email: results[0].email
                },
                process.env.JWT_KEY,
                {
                    expiresIn:'1h'
                });
                return res.status(200).send({
                    mensagem: "Autenticação realizada com sucesso",
                    token: token
                });
            }
            return res.status(401).send({ mensagem: "Falha na autenticação"})
        } catch (error) {
            return res.status(500).send({mensagem: "Falha na autenticação"});
        }
};

exports.Logout = async(req, res, next) =>{
            
            delete req.session.user;

            res.redirect('/movie');    
}