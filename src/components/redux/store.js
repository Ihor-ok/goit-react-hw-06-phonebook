import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from 'components/redux/contactsSlice'
import { filterSlice } from 'components/redux/filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
  },
})

