var express = require('express')
var router = express.Router()
const CRUD = require('./crud')

router.get('/', CRUD.find)

router.get('/:id', CRUD.findOne)

router.put('/:id', CRUD.update)

router.delete('/:id', CRUD.remove)

router.post('/', CRUD.create)

module.exports = router;