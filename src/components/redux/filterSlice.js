import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterChange(state, actions) {
      state = actions.payload
      
      return state
    },

  },
})

// Action creators are generated for each case reducer function
export const {filterChange} = filterSlice.actions

