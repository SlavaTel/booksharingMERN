import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  bookListReducer, 
  bookDetailsReducer,
  bookDeleteReducer,
  bookCreateReducer,
  bookUpdateReducer,
  bookReviewCreateReducer,
  bookTopRatedReducer,
} from './reducers/bookReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer


} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderBookingReducer,
  orderListReducer,

} from './reducers/orderReducers'

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    bookDelete: bookDeleteReducer,
    bookCreate: bookCreateReducer,
    bookUpdate: bookUpdateReducer,
    bookReviewCreate: bookReviewCreateReducer,
    bookTopRated: bookTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderBooking: orderBookingReducer,
    orderList: orderListReducer,




    
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const bookingAddressFromStorage = localStorage.getItem('bookingAddress')
  ? JSON.parse(localStorage.getItem('bookingAddress'))
  : {}
  

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    bookingAddress: bookingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))

    export default store