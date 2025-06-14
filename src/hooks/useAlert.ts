import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { alertSchema } from '../utils/validations';
import { useDispatch } from 'react-redux';
import { addAlert } from '../store/slice/alertsSlice';

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

  const addNewAlert = (symbol: string, alertPrice: string) => {
    dispatch(addAlert({ symbol, alertPrice }));
    reset({
      symbol: '',
      alertPrice: '',
    });
  };

  return {
    control,
    errors,
    handleSubmit,
    addNewAlert,
  };
};
