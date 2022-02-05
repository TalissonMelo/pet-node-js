const customExpress = require('./configuracao/customExpress')

const app = customExpress();

app.listen(3000, () => {
    console.log("Aplicação iniciada")
})