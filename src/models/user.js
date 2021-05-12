const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
  name: {
     type: String,
     trim: true,
     required: true,
   },
   email: {
     type: String,         
     required: true,
     trim: true,
     lowercase: true,
     validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
     }
  },
  phone_number: {
      type: Number,
      required: true,
   },
  age: {
      type: Number,
      required: true
   }
})
const User = mongoose.model('User', userSchema)
module.exports = User