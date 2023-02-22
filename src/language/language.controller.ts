import { NextFunction, Request, Response} from 'express'
import { LanguageModel } from './language.model' 


export const getLanguages = async (req: Request, res: Response) => {

}

export const getLanguage = async (req: Request, res: Response) => {

}

export const createLanguage = async (req: Request, res: Response) => {
    try {
        const newLanguage = await LanguageModel.create(req.body)
        res.status(201).json(newLanguage)
    } catch (error) {
        console.log(error)
    }
}

export const deleteLanguage = async (req: Request, res: Response) => {

}