import { NextFunction, Request, Response} from 'express'
import { CategoryModel } from '../category/cat.model'


export const getCategories = async (req: Request, res: Response) => {

}

export const getCategory  = async (req: Request, res: Response) => {
    
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = await CategoryModel.create(req.body)
        res.status(201).json(newCategory)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    
}