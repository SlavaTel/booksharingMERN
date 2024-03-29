import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import BookCarousel from '../components/BookCarousel'
import Meta from '../components/Meta'
import { listBooks } from '../actions/bookActions'


const HomeScreen = ({ match }) => {
  // const [books, setBooks] = useState([])

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const bookList = useSelector(state => state.bookList)

  const { loading, error, books, page, pages  } = bookList

  useEffect(() => {
    dispatch(listBooks(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <BookCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Books</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {books.map((book) => (
              <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                <Book book={book} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
  // return (
    
  //   // <>
  //   // {loading ? (
  //   //   <Loader />
  //   // ) : error ? (
  //   //   <Message variant='danger'>{error}</Message>
  //   // ) : (
  //   //   <>
  //   //     <h1>Latest Books</h1>
  //   //     <Row className='my-1 p-1 rounded overflow-hidden flex-nowrap '>
  //   //       {books.sort((prev, next)=> prev._id - next._id ).map(book => (
  //   //         <Col sm={4} md={2} xl={2} key={book._id}>
  //   //           <Book book={book} />
  //   //         </Col>
  //   //       ))}
  //   //     </Row>
  //   //     <h1>Popular Books</h1>
  //   //     <Row className='my-1 p-1 rounded overflow-hidden flex-nowrap '>
  //   //       {books.sort((prev, next)=> next.rating - prev.rating).map(book => (
  //   //         <Col sm={4} md={2} xl={2} key={book._id}>
  //   //           <Book book={book} />
  //   //         </Col>
  //   //       ))}
  //   //     </Row>
  //   //   </>)
  //   // }
  //   // </>
  // )
}

export default HomeScreen
