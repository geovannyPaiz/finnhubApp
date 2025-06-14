import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AlertsState = AlertItem[];

const initialState: AlertsState = [
  { symbol: 'BINANCE:ETHUSDT', alertPrice: 2500 },
];

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<AlertItem>) => {
      state.push(action.payload);
    },
    removeAlert: (
      state,
      action: PayloadAction<{ symbol: string; alertPrice: number }>,
    ) => {
      return state.filter(
        alert =>
          alert.symbol !== action.payload.symbol ||
          alert.alertPrice !== action.payload.alertPrice,
      );
    },
    resetAlerts: () => {
      return [];
    },
  },
});

export const { addAlert, removeAlert, resetAlerts } = alertsSlice.actions;

export default alertsSlice.reducer;
