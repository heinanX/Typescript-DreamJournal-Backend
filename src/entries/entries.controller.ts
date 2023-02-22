import { EntryModel } from './entries.model'
import { NextFunction, Request, Response} from 'express'

export async function getEntry(req: Request, res: Response, next: NextFunction) {
    try {
        const entries = await EntryModel.find()
        res.status(200).json(entries)
    } catch (error){
        next(error)
    }
}

export async function createEntry(req: Request, res: Response, next: NextFunction) {
try {
    const entry = await EntryModel.create(req.body)
    res.status(201).json(entry)
    } catch (error){
        next(error)
    }
}

export async function deleteEntry(req: Request, res: Response, next: NextFunction) {
    const deleted = await EntryModel.findOneAndRemove({ _id: req.params.id })
    res.status(200).json(deleted)
}