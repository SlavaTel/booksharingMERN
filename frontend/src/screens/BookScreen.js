import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, ListGroupItem, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listBookDetails } from '../actions/bookActions'


const BookScreen = ({ history, match }) => {

  const [qty, setQty] = useState(0)

  const dispatch = useDispatch()

  const bookDetails = useSelector(state => state.bookDetails)

  const { loading, error, book } = bookDetails

  useEffect(() => {
    // const fetchBook = async () => {
    //   const { data } = await axios.get(`/api/books/${match.params.id}`)

    //   setBook(data)
    // }
    // fetchBook()

  dispatch(listBookDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)

  }

  return (
  <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> 
      : (
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
                  {book.countInStock > 0 ? `In Stock in ${book.nameOfStock}` : 'Out Of Stock'}
                </Col>            
              </Row>
            </ListGroupItem>

            {book.countInStock > 0 && ( 
              <ListGroupItem>
                <Row>
                  <Col>
                    Qty
                  </Col>
                  <Col>
                    <FormControl 
                      as='select' 
                      value={qty} 
                      onChange={(e) => setQty(e.target.value)}
                    > 
                      {[...Array(book.countInStock).keys()].map((x) => (
                        <option key={x +1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}  
                    </FormControl>
                  </Col>
                </Row>
              </ListGroupItem>
            )}

            <ListGroupItem>
              <Button 
                onClick={addToCartHandler}
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
      )
    }
    </>
  )}

export default BookScreen
