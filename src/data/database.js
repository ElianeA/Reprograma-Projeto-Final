require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => {

            console.log('Database conectada com sucesso')
        })
        .catch((error) => {
            console.log("Algo deu errado")
            console.error(error)
        })
}

module.exports = { connect }