const express = require('express')
const catalogueRouter = express.Router()
const { createEntry, getEntry, deleteEntry } = require('./catalogue.controller')


catalogueRouter.get('/', getEntry)
catalogueRouter.get('/:id', getEntry)
catalogueRouter.post('/entry', createEntry)
catalogueRouter.delete('/:id', deleteEntry)


module.exports = { catalogueRouter }