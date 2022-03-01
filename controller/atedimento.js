const { recebe, update } = require('../models/atendimentos');
const Atendimento = require('../models/atendimentos')

module.exports = app =>{

    app.get('/atendimentos', (req, res) => {
        Atendimento.recebe(res);
    });
    app.get('/atendimentos/:id', (req, res) => {
        const Id = parseInt(req.params.id);
        Atendimento.buscarID(Id, res);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res)
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Atendimento.update(id, valores, res)
    });

    app.delete('/atendimentos/:id', (req, res) =>{
        const id = Number.parseInt(req.params.id);
        Atendimento.deletar(id, res);
    })   
    
}