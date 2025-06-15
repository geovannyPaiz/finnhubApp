import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type WatchListState = WatchListItem[];

const initialState: WatchListState = [];

const watchListSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addWatchList: (state, action: PayloadAction<WatchListItem>) => {
      state.push(action.payload);
    },
    updateWatchListData: (
      state,
      action: PayloadAction<{
        symbol: string;
        currentPrice: number;
        percentChange: number;
      }>,
    ) => {
      const index = state.findIndex(
        WatchList => WatchList.symbol === action.payload.symbol,
      );
      if (index !== -1) {
        state[index].currentPrice = action.payload.currentPrice;
        state[index].percentChange = action.payload.percentChange;
      }
    },
  },
});

export const { addWatchList, updateWatchListData } = watchListSlice.actions;

export default watchListSlice.reducer;
