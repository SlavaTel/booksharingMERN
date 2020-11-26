import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'

// @desc   Fetch all books
// @route  GET /api/books
// @access Public   

const getBooks =  asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Book.countDocuments({ ...keyword })
  const books = await Book.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    
  res.json({books, page, pages: Math.ceil(count / pageSize)})
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


// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteBook = asyncHandler(async (req, res) => {
  const book = await book.findById(req.params.id)

  if (book) {
    await book.remove()
    res.json({ message: 'book removed' })
  } else {
    res.status(404)
    throw new Error('book not found')
  }
})

// @desc    Create a book
// @route   POST /api/books
// @access  Private/Admin
const createBook = asyncHandler(async (req, res) => {
  const book = new book({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    author: 'Sample author',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdBook = await book.save()
  res.status(201).json(createdBook)
})

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private/Admin
const updateBook = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    author,
    category,
    countInStock,
  } = req.body

  const book = await book.findById(req.params.id)

  if (book) {
    book.name = name
    book.price = price
    book.description = description
    book.image = image
    book.author = author
    book.category = category
    book.countInStock = countInStock

    const updatedBook = await book.save()
    res.json(updatedBook)
  } else {
    res.status(404)
    throw new Error('book not found')
  }
})

export { getBooks, getBookById, deleteBook, createBook, updateBook  }