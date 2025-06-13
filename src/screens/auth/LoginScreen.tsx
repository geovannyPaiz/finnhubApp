// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import auth0 from '../../services/auth0';
import { useAuth0 } from 'react-native-auth0';

export default function LoginScreen() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      console.log('entro al metodo');
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://dev-k5y61bbt5mkrcof4.us.auth0.com/userinfo',
        redirectUrl:
          'com.finnhubapp://dev-k5y61bbt5mkrcof4.us.auth0.com/ios/com.finnhubapp/callback',
      });
      setAccessToken(credentials.accessToken);

      const userInfo = await auth0.auth.userInfo({
        token: credentials.accessToken,
      });
      setProfile(userInfo);
    } catch (e) {
      console.log('Login error: ', e);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setAccessToken(null);
      setProfile(null);
    } catch (e) {
      console.log('Logout error: ', e);
    }
  };

  return (
    <View className="flex flex-1 justify-center items-center bg-custom-background">
      {profile ? (
        <>
          <Text className="font-trebuchet text-white">
            Welcome {profile.name}
          </Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Button onPress={login} title="Log in4" />
      )}
    </View>
  );
}
