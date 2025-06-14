import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../components/TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Finnhub App">
      <Stack.Screen
        name="Finnhub App"
        component={TabNavigator}
        options={({ route }) => ({
          headerTitle: route.name,
          headerShown: true,
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'left',
            top: 0,
            fontFamily: 'TrebuchetMS',
          },
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#000',
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
}
