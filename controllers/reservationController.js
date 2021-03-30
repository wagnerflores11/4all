const { response } = require('express');
const mysql = require('../database/mysql');


exports.Reservation = async (req, res, next) => {
    try {
            var query = `SELECT * FROM tb_reservations WHERE title = ?`;
            var result = await mysql.execute(query, [req.body.title]);

            if (result.length == 0){
                return res.status(404).send({
                    mensagem: 'Não foram encontradas reservas para este título de filme'
                })
            }
            const response = {
                reservation: {
                    id: result[0].id,
                    name: result[0].name,
                    title: result[0].title,
                    register: result[0].register,
                    request: {
                        type: 'GET'
                    }

                }
            }

            return res.status(200).send(response);
        } catch(error){
            return res.status(500).send({error: error})
        }
}
