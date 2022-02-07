module.exports = app => {

    app.get("/atendimentos", (req, res) => {
        res.send("Você está na rota de atendimentos e está utilizando GET.");
    });


    app.post('/atendimentos', (req , res) => {
        res.send("Você está na rota de atendimentos é está realizando um POST")
    })
}