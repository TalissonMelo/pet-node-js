const atendimento = require('../modelos/atendimentos');

module.exports = app => {
    app.post('/atendimentos', (req , res) => {
        const novoAtendimento = req.body
        atendimento.adicionar(novoAtendimento)
        res.send("Você está na rota de atendimentos é está realizando um POST")
    })
}