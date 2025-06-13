import { useState } from 'react';
import auth0 from '../services/auth0';

const useLogin = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://dev-k5y61bbt5mkrcof4.us.auth0.com/userinfo',
        redirectUrl:
          'com.finnhubapp.auth0://dev-k5y61bbt5mkrcof4.us.auth0.com/android/com.finnhubapp/callback',
      });
      setAccessToken(credentials.accessToken);

      const userInfo = await auth0.auth.userInfo({
        token: credentials.accessToken,
      });
      console.log('userInfo', userInfo);
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
  return {
    login,
    logout,
    profile,
  };
};

export default useLogin;
