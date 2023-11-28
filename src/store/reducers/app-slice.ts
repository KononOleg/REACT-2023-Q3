import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type AppSliceState = { countries: string[] };

const initialState: AppSliceState = { countries: ['France', 'Germany'] };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
export const appSelector = (state: RootState) => state.appSlice;
