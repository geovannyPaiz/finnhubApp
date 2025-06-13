import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/Button';
import useLogin from '../../hooks/useLogin';

export default function AlertScreen() {
  const { logout } = useLogin();
  return (
    <View>
      <Text className="text-white font-trebuchet text-6xl">Alert</Text>
      <CustomButton label="logout" type="primary" onPress={logout} />
    </View>
  );
}
