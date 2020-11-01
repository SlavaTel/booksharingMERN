import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_BOOKING_ADDRESS,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/books/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      book: data._id,
      name: data.name,
      image: data.image,
      nameOfStock: data.nameOfStock,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveBookingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_BOOKING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('bookingAddress', JSON.stringify(data))
}

