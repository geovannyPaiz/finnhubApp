import React from 'react';
import { View, Text } from 'react-native';
import clsx from 'clsx';

type Props = {
  alert: WatchListItem;
};

const StockCard = ({ alert }: Props) => {
  const { symbol, currentPrice, percentChange } = alert;

  const formattedPrice =
    typeof currentPrice === 'number' ? `$${currentPrice.toFixed(2)}` : 'N/A';

  const formattedChange =
    typeof percentChange === 'number' ? `${percentChange.toFixed(2)}%` : 'N/A';

  const isPositive = percentChange !== undefined && percentChange >= 0;

  return (
    <View className="bg-black  shadow-md p-4 m-2 w-full">
      <Text className="text-lg font-semibold text-white font-trebuchet">
        {symbol}
      </Text>
      <Text className="text-xl font-bold mt-2  text-white font-trebuchet">
        {formattedPrice}
      </Text>
      <Text
        className={clsx(
          'mt-1 font-trebuchet ',
          isPositive ? 'text-green-500' : 'text-red-500',
        )}
      >
        {' '}
        {formattedChange}
      </Text>
    </View>
  );
};

export default StockCard;
