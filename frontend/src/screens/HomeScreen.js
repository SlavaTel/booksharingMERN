import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listBooks } from '../actions/bookActions'

const HomeScreen = () => {
  // const [books, setBooks] = useState([])
  const dispatch = useDispatch()

  const bookList = useSelector(state => state.bookList)

  const { loading, error, books } = bookList

  useEffect(() => {
    // const fetchBooks = async () => {
    //   const { data } = await axios.get('/api/books')
    //   setBooks(data)
    // }
    // fetchBooks()

    dispatch(listBooks())
  }, [dispatch])



  return (
    <>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
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
      </>)
    }
    </>
  )
}

export default HomeScreen
