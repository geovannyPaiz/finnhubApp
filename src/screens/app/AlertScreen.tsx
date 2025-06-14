import React from 'react';
import { View, Text } from 'react-native';
import { useFinnhubPriceAlerts } from '../../hooks/useFinnhubPriceAlerts';
import ControlledInputText from '../../components/ControlledInputText';
import { useAlert } from '../../hooks/useAlert';
import ControlledDropdown from '../../components/ControlledDropdown';
import { popularSymbols } from '../../dummyData/popularSymbols';
import CustomButton from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function AlertScreen() {
  const { errors, control, handleSubmit, addNewAlert } = useAlert();
  const alerts = useSelector((state: RootState) => state.alerts);
  useFinnhubPriceAlerts(alerts);
  return (
    <View className="flex flex-1 bg-custom-background px-12 gap-y-4 py-8">
      <Text className="text-white font-trebuchet text-2xl">
        Add a stock to receive notifications
      </Text>
      <ControlledDropdown
        label="Stock"
        placeholder="Add a stock"
        error={errors?.symbol?.message}
        control={control}
        name="symbol"
        required
        items={popularSymbols}
      />
      <ControlledInputText
        label="Price"
        placeholder="Add a price"
        error={errors?.alertPrice?.message}
        control={control}
        name="alertPrice"
        required
      />
      <View className="mt-4">
        <CustomButton
          label="Save"
          onPress={handleSubmit(data =>
            addNewAlert(data.symbol, data.alertPrice),
          )}
          type="primary"
        />
      </View>
    </View>
  );
}
