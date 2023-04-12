const mongoose = require('mongoose')
const fs = require('fs')

const Collection = 'prova'
const url = `mongodb://localhost:27017/${Collection}`

mongoose.connect(url)

const Schema = mongoose.Schema({
    prova: {
        type: Buffer
    }
})

const models = mongoose.model('models', Schema)

const __prova = new models({
    prova: fs.readFileSync('./src/video.mp4')
})
__prova.save()