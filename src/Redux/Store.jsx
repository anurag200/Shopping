import { configureStore } from '@reduxjs/toolkit'
import CartReducers from '../Redux/CartReducer'

const Store = configureStore({
  reducer: {
    user: CartReducers,
  },
})

export default Store
