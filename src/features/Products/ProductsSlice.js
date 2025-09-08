import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
            console.log("Products set to Products array (Redux)", state.products);
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProducts, setLoading, setError } = ProductsSlice.actions

export default ProductsSlice.reducer