const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema( {
      name: { type: String },
      price: { type: Number },
      type: { type: String },
      update_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('products', ProductSchema);