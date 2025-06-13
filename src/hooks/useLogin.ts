import auth0 from '../services/auth0';
import { useDispatch } from 'react-redux';
import { clearUserProfile, setUserProfile } from '../store/slice/userSlice';
import { AUTH0_DOMAIN } from '@env';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: `https://${AUTH0_DOMAIN}/userinfo`,
        redirectUrl: `com.finnhubapp.auth0://${AUTH0_DOMAIN}/android/com.finnhubapp/callback`,
      });
      credentials.accessToken;

      const userInfo = await auth0.auth.userInfo({
        token: credentials.accessToken,
      });
      console.log('userInfo', userInfo);
      dispatch(setUserProfile(userInfo));
    } catch (e) {
      console.log('Login error: ', e);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      dispatch(clearUserProfile());
    } catch (e) {
      console.log('Logout error: ', e);
    }
  };
  return {
    login,
    logout,
  };
};

export default useLogin;
