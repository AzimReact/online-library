import { createStore } from 'redux'
import homeReducer from './homeReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, homeReducer)

export const store = createStore(
    persistedReducer
);

export const persistor = persistStore(store)