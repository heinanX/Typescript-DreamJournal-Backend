import { NextFunction, Request, Response} from 'express'
import { UserModel } from './user.model'

import bcrypt from 'bcrypt'

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const { username, password, mail} = req.body

        const checkUser = await UserModel.findOne({username: username})
        if (!checkUser) {
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = {
                username: username,
                password: hashedPassword,
                mail: mail 
            }
            const user = await UserModel.create(newUser)
            res.status(200).json(user)
            
        } else { return res.status(404).json('Username already taken')}
    } catch (error) {
        console.log(error)
    }



    
}


export const loginUser = async  (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    const getUser = await UserModel.findOne({ username: username})

    if(!getUser) { return res.status(404).json('Not a registered User.')}

    const match = await bcrypt.compare(password, getUser.password);

    if(match) {
        req.session = getUser
        return res.status(200).json('Successful Login')
    } else {
        res.status(404).json('incorrect password')
    }
}

export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body
    const getUser = await UserModel.findOne({ username: username})
    
    req.session = null
    res.status(200).json(`${username} have been logged out`)
}