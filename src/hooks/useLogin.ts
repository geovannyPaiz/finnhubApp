import auth0 from '../services/auth0';
import { useDispatch } from 'react-redux';
import { clearUserProfile, setUserProfile } from '../store/slice/userSlice';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://dev-k5y61bbt5mkrcof4.us.auth0.com/userinfo',
        redirectUrl:
          'com.finnhubapp.auth0://dev-k5y61bbt5mkrcof4.us.auth0.com/android/com.finnhubapp/callback',
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
