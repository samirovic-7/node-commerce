const mongoose = require("mongoose")
const CategorySchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'name must be required'],
        unique: true,
        minLength:[3,'min char is 3'],
        maxLength:[32,'min char is 32']
    },
    slug:{
        type:String,
        lowercase:true
    }
},{timestamps:true})
const CatigoryModel = mongoose.model('category',CategorySchema)
module.exports = CatigoryModel