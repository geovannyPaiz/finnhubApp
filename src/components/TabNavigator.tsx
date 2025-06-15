import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AlertScreen from '../screens/app/AlertScreen';
import WatchlistScreen from '../screens/app/WatchlistScreen';
import GraphScreen from '../screens/app/GraphScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1eba54',
        tabBarInactiveTintColor: '#979797',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name={'Alert'}
        component={AlertScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'bell'}
              solid
              color={focused ? '#1eba54' : '#979797'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'WatchList'}
        component={WatchlistScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'list'}
              solid
              color={focused ? '#1eba54' : '#979797'}
              size={20}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={'Graph'}
        component={GraphScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'chart-bar'}
              solid
              color={focused ? '#1eba54' : '#979797'}
              size={20}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
