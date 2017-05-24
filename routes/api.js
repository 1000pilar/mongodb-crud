var express = require('express')
var router = express.Router()
var controllerBooks = require('../controllers/bookController')


// Use connect method to connect to the server
router.post('/books', controllerBooks.insertBooks)
router.get('/books', controllerBooks.findAllBooks)
router.put('/books/:id', controllerBooks.updateBookById)
router.delete('/books/:id', controllerBooks.deleteBookById)


module.exports = router
