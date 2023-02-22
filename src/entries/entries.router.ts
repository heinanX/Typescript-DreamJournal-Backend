import express from 'express'
import { createEntry, getEntry, deleteEntry } from './entries.controller'

export const entriesRouter = express.Router()

entriesRouter.get('/', getEntry)
entriesRouter.get('/:id', getEntry)
entriesRouter.post('/entry', createEntry)
entriesRouter.delete('/:id', deleteEntry)