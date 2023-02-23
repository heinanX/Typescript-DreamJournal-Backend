import express from 'express'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { userRouter } from './user/user.router'
import { entriesRouter } from './entries/entries.router'
import { categoryRouter } from './category/cat.route'
import { languageRouter } from './language/language.route'


export const app = express();

// -----> insert corsOption into cors' parenthesis if you want to limit endpoints
// const corsOptions = {
//     origin: ['http://localhost:3000/api/journal', 'http://localhost:3000/api/journal/entry']
// }

app.use(cors())
app.use(express.json())
app.use(cookieSession({
    name: 'session',
    secret: '$3cr3t',
    maxAge: 24
}))

app.use('/api/users', userRouter)
app.use('/api/journal', entriesRouter)
app.use('/api/category', categoryRouter)
app.use('/api/language', languageRouter)