import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type AppSliceState = { data: string[] };

const initialState: AppSliceState = { data: [] };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
export const appSelector = (state: RootState) => state.appSlice;
