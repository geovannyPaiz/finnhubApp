/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import './global.css'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className='flex flex-col justify-center items-center flex-1 bg-custom-background px-4 py-8'>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className='text-primary text-6xl font-trebuchet'>Finnhub Stock API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
