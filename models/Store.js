const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please Add a Store ID'],
        unique,
        trim: true,
        maxlength: [10, 'Store ID must be 10 Characters']
    },
    address: {
        type: String,
        required: [true, 'Please Add an Address']
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Store', StoreSchema)