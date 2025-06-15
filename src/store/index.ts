import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import alertsSlice from './slice/alertsSlice';
import watchlistSlice from './slice/watchlistSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    alerts: alertsSlice,
    watchlist: watchlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
