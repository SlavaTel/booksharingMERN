import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [
    {
      name: {type: String, required: true},
      qty: {type: Number, required: true},
      image: {type: String, required: true},
      price: { type: Number, required: true },
      nameOfStock: {type: String, required: true},
      book: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
      },
    }
  ],
  bookingAdress: {
    address: {type: String,required: true},
    city: {type: String,required: true, default: "Minsk"},
    phoneNumber: {type: String}
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },   
    update_time: { type: String },
    email_adress: { type: String },
    phoneNumber: {type: String}
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date
  },
  isBooked: {
    type: Boolean,
    required: true,
    default: false
  },
  bookedAt: {
    type: Date
  },
  isReturned: {
    type: Boolean,
    required: true,
    default: false
  },
  reuturnedAt: {
    type: Date   
  }
}, {
  timestamps: true,
})

const Order = mongoose.model('Order', orderSchema)

export default Order