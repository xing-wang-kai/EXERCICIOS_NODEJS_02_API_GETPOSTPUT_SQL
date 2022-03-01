const res = require('express/lib/response');
const moment = require('moment');
const conexao = require('../infroestrutura/conexao');


class Atendimento{
    adiciona(atendimento){
    
        //formatando datas para a tabela
        const datacriacao = moment().format('YYYY-MM-DD HH-MM-SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        

        //validações de dados
        const dataehValida = !moment(data).isSameOrAfter(datacriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;
        const validacoes = [{
            nome: 'data',
            valido: dataehValida,
            mensagem: 'A data informada não é válida e deve ser maior ou menor ue a data atual'
        },{
            nome: 'nome',
            valido: clienteEhValido,
            mensagem: 'O nome precisa ter mais do que 5 caracteres'
        }]

        const erros = validacoes.filter(campo => !campo.valido)
        const existeerror = erros.length;
        if(existeerror){
            res.status(400).json(erros)
        }else{
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

        ///codigo professor
        
        ///codigo professor
        
    }
}

module.exports = new Atendimento;