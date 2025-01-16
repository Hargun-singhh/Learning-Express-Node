const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },LastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
},{timestamps: true})

const UserG = mongoose.model("user",userSchema);

module.exports = UserG;