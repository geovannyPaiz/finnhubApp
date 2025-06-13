import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlertScreen from '../screens/app/AlertScreen';
import WatchlistScreen from '../screens/app/WatchlistScreen';
import GraphScreen from '../screens/app/GraphScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Alert">
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="Watchlist" component={WatchlistScreen} />
      <Stack.Screen name="Graph" component={GraphScreen} />
    </Stack.Navigator>
  );
}
