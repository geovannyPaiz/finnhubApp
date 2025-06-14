import React, { useEffect } from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';

export default function App() {
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
  };
  useEffect(() => {
    requestNotificationPermission();

    PushNotification.createChannel(
      {
        channelId: 'stock-alerts',
        channelName: 'Stock Alerts',
        channelDescription: 'Alert channel for prices',
        importance: 4,
        vibrate: true,
      },
      created => console.log(`Channel created: ${created}`),
    );
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          className="bg-custom-background flex-1"
          edges={['bottom', 'left', 'right']}
        >
          <RootNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
