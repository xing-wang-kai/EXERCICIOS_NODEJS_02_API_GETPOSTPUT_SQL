const Atendimento = require('../models/atendimentos')

module.exports = app =>{

    app.get('/', (req, res) => {
        res.send('Executado com sucesso!! teste 001s');
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento)
        res.send('você está na rota atendimentos e está realizando um POST');
    });
    
}