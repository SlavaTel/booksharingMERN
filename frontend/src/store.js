import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  bookListReducer, 
  bookDetailsReducer 
} from './reducers/bookReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
  userLoginReducer, 
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer 
} from './reducers/userReducers'

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {}

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

// const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware)))

    export default store