const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type:String,
        required:true,
    },
    imagePath: {
        type:String,
        required:true,
    }
})

const user  = mongoose.model('imageuploads', userSchema);

module.exports = user;