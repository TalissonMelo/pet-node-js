const customExpress = require('./configuracao/customExpress');
const conexao = require('./infraestrutura/conexao');

conexao.connect(error => {
    if(error) {
        console.log(error);
    } else {
        console.log("CONECTADO COM SUCESSO AO BANCO DE DADOS PET!.")
        const app = customExpress();
        app.listen(3000, () => {
            console.log("Aplicação iniciada")
        })
    }
})
