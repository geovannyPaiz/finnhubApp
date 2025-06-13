import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
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
