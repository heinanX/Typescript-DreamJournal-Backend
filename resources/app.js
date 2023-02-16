const express = require('express');
const cors = require('cors')
const app = express();
const { userRouter } = require('./user/user.router')
const { catalogueRouter } = require('./catalogue/catalogue.router')

// -----> insert corsOption into cors' parenthesis if you want to limit endpoints
// const corsOptions = {
//     origin: ['http://localhost:3000/api/journal', 'http://localhost:3000/api/journal/entry']
// }

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/journal', catalogueRouter)



module.exports = { app }