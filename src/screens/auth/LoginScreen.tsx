import React from 'react';
import { Button, View, Text } from 'react-native';
import useLogin from '../../hooks/useLogin';

export default function LoginScreen() {
  const { profile, login, logout } = useLogin();

  return (
    <View className="flex flex-1 justify-center items-center bg-custom-background gap-y-4">
      {profile ? (
        <>
          <Text className="font-trebuchet text-white">
            Welcome {profile.name}
          </Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <>
          <Text className="font-trebuchet text-6xl text-white text-center">
            Welcome to FinnhubApp
          </Text>
          <Button onPress={login} title="Log in9" />
        </>
      )}
    </View>
  );
}
