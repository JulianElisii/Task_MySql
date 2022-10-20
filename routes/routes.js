const { response } = require('express')
const express = require ('express')
const { save, update } = require('../controllers/crud')
const router = express.Router()
const conexion = require('../DB/DB')



//Renderizar todas las tareas de la base de datos en index.ejs
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if(error){
            console.log(error)
        }else {
            res.render('../view/index.ejs', {results:results})
        }
    })
})

//create routes
router.get('/create', (req, res) => {
    res.render('../view/create.ejs')
})
router.post('/save', save)//se guarda la tarea creada

//edit route
router.get('/edit/:id', (req, res) => {
 const id = req.params.id
 conexion.query('SELECT * FROM users WHERE id=?', [id], (error, response) => {
    if(error) {
        console.log(error)
    }else {
        console.log(response[0])
        res.render('../view/edit.ejs', {user:response[0]})
    }
 })
})

router.post('/update', update)//se guarda la tarea editada 

//borrar tareas 
router.get('/delete/:id', (req, res) => {
    const id = req.params.id
    conexion.query('DELETE FROM users WHERE id=?', [id], (error , response) => {
        if(error) {
            console.log(error)
        }else {
            res.redirect('/')
        }
    })
})


module.exports = router