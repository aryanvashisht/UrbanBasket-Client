import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/CartOperations/userSlice'
import productsReducer from '../features/Products/ProductsSlice'

export const store = configureStore({
  reducer: {
    userOperations : userReducer,
    Products : productsReducer,
  },
})