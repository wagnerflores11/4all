const { request } = require('express');
const mysql = require('../database/mysql');


exports.getMovie = async (req, res, next) => {
    try {
        let title = '';
        if (req.query.title) {
            title = req.query.title
        }
        const query = `SELECT * FROM tb_movie`;
        const result = await mysql.execute(query)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.getMoviedetail = async (req, res, next)=> {
    try {
        const query = 'SELECT * FROM tb_movie WHERE title = ?;';
        const result = await mysql.execute(query, [req.body.title]);

        if (result.length == 0) {
            return res.status(404).send({
                message: 'Não foi encontrado filme com este título'
            })
        }
        const response = {
            product: {
                id: result[0].id,
                title: result[0].title,
                director: result[0].director,
                count: result[0].count,
                request: {
                    type: 'GET',
                    description: 'Retorna todos os filmes',
                    url: process.env.URL_API + 'filmes'
                }
            }
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};
