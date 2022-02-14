const customExpress = require('./configuracao/customExpress');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabelas')


conexao.connect(error => {
    if(error) {
        console.log(error);
    } else {
        console.log("CONECTADO COM SUCESSO AO BANCO DE DADOS PET!.")
        tabelas.init(conexao)
        const app = customExpress();
        app.listen(3000, () => {
            console.log("Aplicação iniciada")
        })
    }
})
