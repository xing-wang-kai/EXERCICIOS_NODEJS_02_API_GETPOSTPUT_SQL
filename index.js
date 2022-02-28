const custonExpress = require('./config/custonExpress');
const conexao = require(`./infroestrutura/conexao`);
const Tabela = require('./infroestrutura/tabelas');

const chalk = require('chalk');

const app = custonExpress();
const port = 3001;

conexao.connect( error=>{
    if(error){
        console.log(erro)
    }else{
        Tabela.init(conexao)
        console.log(chalk.bgYellow.black(`<-------------|| Conectado com sucesso ||------------->`))
        app.listen(port, () => {
            console.log(chalk.bgGreen.black(`<-------||Executado com sucesso na porta ${port}||------->`))
        })
    }
});



