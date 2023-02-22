import express from 'express'
import { getLanguages, getLanguage, createLanguage, deleteLanguage } from './language.controller'

export const languageRouter = express.Router()

languageRouter.get('/', getLanguages)
languageRouter.get('/:id', getLanguage)
languageRouter.post('/', createLanguage)
languageRouter.delete('/:id', deleteLanguage)