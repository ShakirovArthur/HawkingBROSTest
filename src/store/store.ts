import { configureStore } from '@reduxjs/toolkit'
import { tarrifReducer } from './slice'

export const store = configureStore({
  reducer: {
    tarrif: tarrifReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch