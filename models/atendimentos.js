const res = require('express/lib/response');
const moment = require('moment');
const conexao = require('../infroestrutura/conexao');


class Atendimento{
    adiciona(atendimento){
        const datacriacao = moment().format('YYYY-MM-DD HH-MM-SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatacria = {...atendimento, datacriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?';
        conexao.query(sql, atendimentoDatacria, (error, resultados) => {
            if(error){
                res.status(400).json(error)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento;