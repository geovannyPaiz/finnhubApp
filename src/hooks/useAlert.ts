import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { alertSchema } from '../utils/validations';
import { useDispatch, useSelector } from 'react-redux';
import { addAlert } from '../store/slice/alertsSlice';
import { addWatchList } from '../store/slice/watchlistSlice';
import { RootState } from '../store';
import Toast from 'react-native-simple-toast';

export const useAlert = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(alertSchema),
  });
  const alerts = useSelector((state: RootState) => state.alerts);

  const addNewAlert = (symbol: string, alertPrice: string) => {
    const alert = alerts.find(alertItem => alertItem.symbol === symbol);
    if (alert) {
      Toast.show('This alert is already at your watchlist.', Toast.LONG);
      return;
    }
    dispatch(addAlert({ symbol, alertPrice }));
    dispatch(
      addWatchList({ symbol, alertPrice, currentPrice: 0, percentChange: 0 }),
    );
    reset({
      symbol: '',
      alertPrice: '',
    });
    Toast.show('Alert saved.', Toast.SHORT);
  };

  return {
    control,
    errors,
    handleSubmit,
    addNewAlert,
  };
};
