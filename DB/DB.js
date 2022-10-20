const mysql =require('mysql')


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database:'crud_mysql'
});


conexion.connect((error) => {
    if(error) {
        console.log('error en conexion');
        return
    }
    console.log('conectado a la db MySQL')
})

module.exports = conexion