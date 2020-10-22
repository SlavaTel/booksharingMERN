import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import books from '../books'

const BookScreen = ({match}) => {
    const book = books.find((b) => b._id === Number(match.params.id))
  return (
  <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    <Row>
      <Col md={6}>
        <Image src={book.image} alt={book.name} fluid/>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3> {book.name} </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating 
              value={book.rating} 
              text={`${book.numReviews} reviews.`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            The book has been ordered {book.countOfBookings} times.
           </ListGroup.Item>
           <ListGroup.Item>
              Description: {book.description}
           </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant = 'flush'>
          <ListGroupItem>
            <Row>
              <Col>Status:</Col>
              <Col>
                {book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </Col>            
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button 
              className='btn-block' 
              type='button'
              disabled={book.countInStock === 0}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </>)
  }

export default BookScreen
