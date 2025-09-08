import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,         // logged in user details
  token: null,        // JWT token if you keep it in state
  loading: false,     // API call status
  error: null         // error messages
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state.user);
      state.user = action.payload
      console.log(state.user);

    },
    logoutUser: (state, action) => {
      state.user = null;
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
export const { setUser, setLoading, logoutUser, setError } = userSlice.actions

export default userSlice.reducer