import { createSlice } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact(state, actions) {
      state = state.push(actions.payload)
      
    },

    removeContact(state, actions) {
      state = state.filter((contac) => contac.id !== actions.payload)
      return state
    },

  },
})

// Action creators are generated for each case reducer function
export const { addContact, removeContact } = contactsSlice.actions

