import { createSlice } from '@reduxjs/toolkit';

import { FormInput } from '../../types';
import { RootState } from '../store';

type AppSliceState = { countries: string[]; users: FormInput[] };

const initialState: AppSliceState = {
  countries: ['France', 'Germany'],
  users: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
export const appSelector = (state: RootState) => state.appSlice;
