import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useWatchlist = () => {
  const watchlistItems = useSelector((state: RootState) => state.watchlist);

  return {
    watchlistItems,
  };
};
