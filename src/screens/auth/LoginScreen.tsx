import React from 'react';
import { View, Text } from 'react-native';
import useLogin from '../../hooks/useLogin';
import CustomButton from '../../components/Button';

export default function LoginScreen() {
  const { login } = useLogin();

  return (
    <View className="flex flex-1 justify-center items-center bg-custom-background gap-y-40 px-4">
      <Text className="font-trebuchet text-6xl text-white text-center">
        Welcome to FinnhubApp
      </Text>
      <CustomButton label="Login into App" onPress={login} type="primary" />
    </View>
  );
}
