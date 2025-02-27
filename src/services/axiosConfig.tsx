import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {EnvironmentVariable} from '../constants/env';
import {showMessage} from '../utils/Helper';

const UseAccessToken = async () => {
  const AccessTokken = '';
  if (AccessTokken) {
    return AccessTokken;
  } else {
    return null;
  }
};

const dataServer = axios.create({
  baseURL: EnvironmentVariable.PROD_URL,
  timeout: 100000,
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: EnvironmentVariable.TMDB_API_KEY,
    language: 'en-US',
  },
});

dataServer.interceptors.request.use((config: any) => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    NetInfo.addEventListener(async state => {
      const accessToken = await UseAccessToken();
      if (!state.isConnected) {
        return reject({message: 'No internet connection'});
      }
      if (config.data && config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
      } else {
        config.headers['Content-Type'] = 'application/json';
      }
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return resolve(config);
    });
  });
});
dataServer.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    console.log('error', error);
    if (error?.message === 'No internet connection') {
      showMessage(
        'It looks like you are offline. Please check your network and try again.',
      );
    }
    if (error?.response?.status === 401) {
      //When we use accessToken or our session expires we can do two methods on with refresh tokken and other is to navigate on login screen
      //   navigate();
    }
    console.log('Error', error.response);
    return Promise.reject(error);
  },
);

export {dataServer};
