import express from 'express'
import { getCategories, getCategory, createCategory, deleteCategory } from './cat.controller'

export const categoryRouter = express.Router()

categoryRouter.get('/', getCategories)
categoryRouter.get('/:id', getCategory)
categoryRouter.post('/', createCategory)
categoryRouter.delete('/:id', deleteCategory)