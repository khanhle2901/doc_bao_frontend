import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'khanh',
    id: 0,
    role: -1,
    token: '',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.id = action.payload.id
      state.role = action.payload.role
      state.token = action.payload.token
    },
  },
})

export const { update } = userSlice.actions
export default userSlice.reducer
