import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from './../components/FormContainer';
import { saveBookingAddress } from './../actions/cartActions';

const BookingScreen = ({ history }) => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { bookingAddress } = cart

  const [address, setAddress] = useState(bookingAddress.address)
  const [city, setCity] = useState(bookingAddress.city)
  const [phoneNumber, setPhoneNumber] = useState(bookingAddress.phoneNumber)

  const submitHamdler = (e) => {
    e.preventDefault()
    dispatch(saveBookingAddress({ address, city, phoneNumber }))
    history.push('/payment')
  }
  
   
  return (
    <FormContainer>
      <h1>Booking</h1>
      <Form onSubmit={submitHamdler}>
        <Form.Group controlId='address'>
          <Form.Label>address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>city</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button 
          type='submit' 
          variant='primary' 
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}


export default BookingScreen
