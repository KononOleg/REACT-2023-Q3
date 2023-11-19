import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type AppSliceState = {
  searchValue: string;
};

const initialState: AppSliceState = {
  searchValue: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      return { ...state, searchValue: action.payload };
    },
  },
});

export const { setSearchValue } = appSlice.actions;
export const appSelector = (state: RootState) => state.appSlice;
