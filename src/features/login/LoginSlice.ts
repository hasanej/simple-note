import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface LoginState {
  usernameOrEmail: String
}

const initialState: LoginState = {
  usernameOrEmail: ""
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsernameOrEmail: (state, action: PayloadAction<String>) => {
      state.usernameOrEmail = action.payload
    },
  },
})

export const {setUsernameOrEmail} = loginSlice.actions

export default loginSlice.reducer