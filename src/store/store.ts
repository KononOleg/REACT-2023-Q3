import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './reducers/app-slice';

export const store = configureStore({
  reducer: {
    appSlice: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
