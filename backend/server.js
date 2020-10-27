import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import books from './data/books.js'
import colors from 'colors'

dotenv.config()

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/books', (req, res) => {
  res.json(books)
})

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b._id == req.params.id)
  res.json(book)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)