import { createSlice } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},  // initializes state as an object with a property contacts

  reducers: {
    addContact(state, actions) {
      state.contacts.push(actions.payload);
      
      
    },

    removeContact(state, actions) {
      state.contacts = state.contacts.filter((contac) => contac.id !== actions.payload)
      return state
    },

  },
})


export const { addContact, removeContact } = contactsSlice.actions

