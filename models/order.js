const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    Address: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },

    type: {
        type: String,
        required: true,
        enum: ['food', 'clothes', 'accessories', 'medicine'],
      },
    notes: {
        type: String,
      },

      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

  })
  
  const order = mongoose.model('order', orderSchema)
  
  module.exports = order