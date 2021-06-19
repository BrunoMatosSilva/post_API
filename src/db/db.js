const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongo connected')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose