import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import books from './data/books.js'
import colors from 'colors'
import bookRoutes from './routes/bookRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

const app = express()

connectDB()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/books', bookRoutes)
app.use('/api/users', userRoutes)
app.use('/api/users', orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)