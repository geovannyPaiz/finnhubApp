import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import StockCard from '../../components/StockCard';
import { useWatchlist } from '../../hooks/useWatchlist';

export default function WatchlistScreen() {
  const { watchlistItems } = useWatchlist();

  return (
    <View className="flex flex-1 bg-custom-background px-12 gap-y-4 py-8">
      <Text className="text-white font-trebuchet text-2xl">Watchlist</Text>
      <FlatList
        data={watchlistItems}
        keyExtractor={item => item.symbol}
        renderItem={({ item }) => <StockCard alert={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
