## primeiro npm init -y

-desta maneira será instalada todos inicios do projeto

-----------------------------------------------------------------------------------------
##2) npm install
-para instalar as instancias necessárias ao projeto.

-----------------------------------------------------------------------------------------
##3) npm install express

-   para instalar o express [gerencia todos caminhos para ultilizar os POST GET PUT e DELETE]
-   então adicina o express ao pacote.

-----------------------------------------------------------------------------------------
##4) instalndo nodemon somente em dev
    -mpm install save-dev nodemon [faz nosso servidor atualizar constatemente ser ter que derrubar]

-----------------------------------------------------------------------------------------
##5) instalando Consign
    -npm install consign [esta bibliotéca ajuda a criar novas rotas e salvar em arq separados.]
    -npm install body-parser [faz com que seja possivel ler JSON]

-----------------------------------------------------------------------------------------
##6) instalar o MySql
    -npm install mysql // my sql

    Dados para criar uma conexão: em inforestrutura/conexao.js
            ________________________________________________
            |                                              |
            |    const mysql = require('mysql')            |
            |                                              |
            |    const conexao = mysql.createConnection({  |
            |        host: "localhost",                    |
            |        port: 3308,                           |
            |        user: 'root',                         |
            |        password: 'hoot',                     |
            |        database:  'agenda-petshop'           |
            |    });                                       |
            |                                              |
            |    module.exports = conexao;                 |
            |                                              |
            ------------------------------------------------
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
OBS:: quanto tentei ocorreu um erro ao tentar usar a conexão precisei ir no workbench do MySql
e excrever o comando
[ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';]
onde o password seria a senha que iria usar no caso hoot.
depois rodei
[flush privileges;]
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
##7 importa o modulo conexao criado para o index.JS

    const conexao = require('./inforestrutura/conexao')
    conextao.connect({
        if(error){
                console.log(error);
        }else{
            app.listen(port, ()=>{console.log('conexão realizada com sucesso!')})
        }
    })

-----------------------------------------------------------------------------------------
##08 Criar uma tabela:

    criar um class com o nome tabela entao definir com init(conexao) dentro deste init criar
    uma funcao chamada 'criarAtendimento' criar uma const chamada sql que recebe os parametros
    para criar uma tabela direto do mysql; depois fazer um this.conexao.query e jogar o código sql
    dentro e uma arrow function definindo se error.
---------------------------------------------------------------------------------------
-npm install moment 
    [convert a data atual para uma data do sistema.]