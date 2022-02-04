const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Aplicação iniciada")
})


app.get("/", (req, res) => {
     res.send("Aplicação rodando...");
})