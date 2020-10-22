import React from 'react'
import books from '../books'
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'

const HomeScreen = () => {
  return (
    <div >
      <h1>Latest Books</h1>
        <Row className='my-1 p-1 rounded overflow-hidden flex-nowrap '>
          {books.sort((prev, next)=> prev._id - next._id ).map(book => (
            <Col sm={4} md={2} xl={2} key={book._id}>
              <Book book={book} />
            </Col>
          ))}
        </Row>

      <h1>Popular Books</h1>
      <Row className='my-1 p-1 rounded overflow-hidden flex-nowrap '>
        {books.sort((prev, next)=> next.rating - prev.rating).map(book => (
          <Col sm={4} md={2} xl={2} key={book._id}>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
