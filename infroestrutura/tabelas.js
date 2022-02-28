const chalk = require('chalk');

class Tabela{
    init(conexao){
        console.log(chalk.bgRed.black('<--------|| tabela foram criadas com sucess ||-------->'))
        this.conexao = conexao;
        this.criarAtendimento();
    }
    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), serviço varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, data datetime NOT NULL, datacriacao datetime NOT NULL, PRIMARY KEY(id) )'
        this.conexao.query(sql, (error) => {
            if (error){
                console.log(chalk.bgRed.black(error));
            }else{
                console.log(chalk.bgMagenta.black('<---|| Tabela de atendimentos Criada com sucesso ||--->'))
            }
        })
    }
}

module.exports = new Tabela;