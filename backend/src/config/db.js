const mongoose = require('mongoose')

async function connecttoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database!!!")
    } catch (err) {
        console.log(`Error : ${err}`)
    }
}

module.exports = connecttoDB