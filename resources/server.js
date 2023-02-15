const mongoose = require('mongoose');
const { app } = require('./app');

async function connect() {
    mongoose.set('strictQuery', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/BobbysWish', { useNewUrlParser: true })
    mongoose.connection.on('error', () => { console.log('error') })
    mongoose.connection.once('error', () => { console.log('server connected') })
}

connect()

app.listen(3000, () => console.log('server is up'))