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
// @route  GET /api/books/:id
// @access Public   

const getBookById =  asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(book) {
    res.json(book)
  } else {
    res.status(404)
    throw new Error('Book not found')
  }
res.json(book)
})


// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (book) {
    await book.remove()
    res.json({ message: 'Book removed' })
  } else {
    res.status(404)
    throw new Error('Book not found')
  }
})

// @desc    Create a book
// @route   POST /api/books
// @access  Private/Admin
const createBook = asyncHandler(async (req, res) => {
  const book = new Book({
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


// @desc    Create new review
// @route   POST /api/books/:id/reviews
// @access  Private
const createBookReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const book = await Book.findById(req.params.id)

  if (book) {
    const alreadyReviewed = book.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Book already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    book.reviews.push(review)

    book.numReviews = book.reviews.length

    book.rating =
      book.reviews.reduce((acc, item) => item.rating + acc, 0) /
      book.reviews.length

    await book.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Book not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/books/top
// @access  Public
const getTopBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({}).sort({ rating: -1 }).limit(3)

  res.json(books)
})

export { 
  getBooks, 
  getBookById, 
  deleteBook, 
  createBook, 
  updateBook, 
  createBookReview, 
  getTopBooks  }