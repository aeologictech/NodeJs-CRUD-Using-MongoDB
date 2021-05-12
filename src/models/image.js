const mongoose = require('mongoose');
const validator = require('validator');
const imageSchema = mongoose.Schema({
       image: {
          type: Buffer
        }
});
const Image = mongoose.model('Image', imageSchema);
module.exports = Image