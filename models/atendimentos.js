
const moment = require('moment');
const conexao = require('../infroestrutura/conexao');


class Atendimento{
    adiciona(atendimento, res){
    
        //formatando datas para a tabela
//------------------------------------------------------------------------------------------------------
        const datacriacao = moment().format('YYYY-MM-DD HH-MM-SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        
        //validar os dados
//-------------------------------------------------------------------------------------------------------
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
        }];
        const erros = validacoes.filter(campo => !campo.valido);
        const existeerror = erros.length;
//------------------------------------------------------------------------------------------------------

        if(existeerror){
            res.status(400).json(erros)
        }else{
                const atendimentoDatacria = {...atendimento, datacriacao, data}
                const sql = 'INSERT INTO atendimentos SET ?';

                conexao.query(sql, atendimentoDatacria, (erro, resultados) => {
                    if(erro){
                        res.status(400).json(erro)
                    }
                    else{
                        res.status(201).json(resultados)
                    }
                })

        }
    }

//-------------------------------------------------------------------------------------------------------------
    recebe(res){
        const sql = "SELECT * FROM atendimentos";
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }

        })
    }
    buscarID(Id, res){
        const sql = `SELECT * FROM atendimentos WHERE id = ${Id}`;
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);

            }
        })
    }
    update(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/AAAA').format("YYYY-MM-DD HH:MM:SS")
        }
        const sql = `UPDATE atendimentos SET ? WHERE id=?`;
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }
    deletar(id, res){
        const sql = "DELETE FROM atendimentos WHERE id=?"
        conexao.query(sql, id, (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }
}

module.exports = new Atendimento;