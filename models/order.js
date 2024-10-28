const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    address: {
      type: String,
      required: true,
    },
    number: {
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
  
  const Order = mongoose.model('Order', orderSchema)
  
  module.exports = Order