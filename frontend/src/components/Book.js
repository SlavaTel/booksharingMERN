import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Book = ({ book }) => {
  return (
    <Card className='my-1 p-1 rounded'>
        <Link to={`/book/${book._id}`}>
          <Card.Img src={book.image} variant='top'/>
        </Link>

        <Card.Body className='my-1 p-1'>
          <Link to={`/book/${book._id}`}>
            <Card.Title as='div'><strong>{book.name}</strong></Card.Title>
          </Link>         
          <Card.Text as='div'>
            <Rating
              value={book.rating}
              text={`${book.numReviews} reviews`}              
            />
          </Card.Text>
          <Card.Text as='h3'>${book.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Book
