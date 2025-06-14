import React from 'react';
import { View, Text } from 'react-native';
import { useAlert } from '../../hooks/useAlert';

export default function AlertScreen() {
  useAlert([{ symbol: 'BINANCE:ETHUSDT', alertPrice: 2500 }]);
  return (
    <View className="flex flex-1 justify-center items-center bg-custom-background gap-y-40 px-4">
      <Text className="text-white font-trebuchet text-6xl">Alert</Text>
    </View>
  );
}
