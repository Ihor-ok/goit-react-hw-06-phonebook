import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsSlice } from 'components/redux/contactsSlice'
import { filterSlice } from 'components/redux/filterSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterSlice.reducer,
  },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

