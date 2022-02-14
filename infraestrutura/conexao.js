const mysql = require('mysql');

const conexao = mysql.createConnection({
    hots: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234567',
    database: 'pet'
})

module.exports = conexao