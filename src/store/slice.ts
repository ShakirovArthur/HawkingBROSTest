import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TarrifState {
    totalPrice: number;
    settings: Record<string, number | string>;
    prices: Record<string, number>
}

export const MINUTES_RANGE = [100, 200, 300, 600];
export const SMS_RANGE = [0, 50, 100, 150];
export const INTERNET_RANGE = [5, 10, 15, 25];

export const PRICE_PER_MINUTES = 1;
export const PRICE_PER_SMS = 2;
export const PRICE_PER_GB = 100;

const initialState: TarrifState = {
  totalPrice: 0,
  settings: {
    minutes: MINUTES_RANGE[0],
    sms: SMS_RANGE[0],
    internet: INTERNET_RANGE[0],
    vk:0,
    fb:0,
    phone: '',
    operator: ''
  },
  prices:{
    minutes: MINUTES_RANGE[0] * PRICE_PER_MINUTES,
    sms: SMS_RANGE[0] * PRICE_PER_SMS,
    internet: INTERNET_RANGE[0] * PRICE_PER_GB,
    vk:0,
    fb:0
  }
}

export const tarrifSlice = createSlice({
  name: 'tarrif',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },
    setSetting: (state, action: PayloadAction<{type:string, value:number | string}>) => {
      state.settings[action.payload.type] = action.payload.value;
    },
    setPrice: (state, action: PayloadAction<{type:string, value:number}>) => {
      state.prices[action.payload.type] = action.payload.value;
    }
  },
})

export const { setTotalPrice, setSetting, setPrice } = tarrifSlice.actions
export const tarrifReducer = tarrifSlice.reducer