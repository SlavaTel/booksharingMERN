import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true},
  rating: { type: Number, required: true},
  comment: { type: String, required: true},
})

const bookSchema = mongoose.Schema(
  {
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
    },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countOfBookings: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
  reviews:[reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
    
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User