import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'

// @desc   Fetch all books
// @route  GET /api/books
// @access Public   

const getBooks =  asyncHandler(async (req, res) => {
  const books = await Book.find({})
  
  res.json(books)
})

// @desc   Fetch single book
// @route  GET /api/books/^1
// @access Public   

const getBookById =  asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(book) {
    res.json(book)
  } else {
    res.status(404).json({message: 'Book not found'})
  }
res.json(book)
})

export { getBooks, getBookById }