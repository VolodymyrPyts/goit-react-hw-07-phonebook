import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";


import contactReducer from './contactSlice';
import filtrReducer from "./filtrSlice"

const persistConfiguration = {
  key: "contacts",
  storage,
}


const persistContactReducers = persistReducer(persistConfiguration, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactReducers,
    filter: filtrReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
})

export const persistor = persistStore(store);