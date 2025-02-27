import {Alert, Platform, ToastAndroid} from 'react-native';

export const getImageUrl = (path?: string): string => {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : '';
};

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

export const showMessage = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('Message', message);
  }
};
