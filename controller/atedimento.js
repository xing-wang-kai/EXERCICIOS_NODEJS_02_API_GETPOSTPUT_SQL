const { recebe } = require('../models/atendimentos');
const Atendimento = require('../models/atendimentos')

module.exports = app =>{

    app.get('/atendimentos', (req, res) => {
        Atendimento.recebe(res);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res)
    });
    
}