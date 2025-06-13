import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="bg-custom-background flex-1"
        edges={['bottom', 'left', 'right']}
      >
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
