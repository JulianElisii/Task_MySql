const conexion = require("../DB/DB");



const save = (req, res) => {
    const user = req.body.user
    const rol = req.body.rol
    conexion.query('INSERT INTO users SET ?', {user: user, rol:rol}, (error, response) => {
       if (error){
        console.log(error)
       } else{
        res.redirect('/')
       }
    })
}

const update = (req, res) => {
const id = req.body.id
const user = req.body.user
const rol = req.body.rol
conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results) => {
    if(error){
        console.log(error)
    }else {
        res.redirect("/");
    }
   }) 
}


module.exports ={
    save, update,
}