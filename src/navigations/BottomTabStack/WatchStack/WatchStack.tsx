import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import WatchScreen from '../../../screens/WatchStackScreen/WatchMainScreen/WatchScreen';

const WatchStackNavigator = createNativeStackNavigator<WatchStackParamsList>();

export default function WatchStack() {
  return (
    <WatchStackNavigator.Navigator
      initialRouteName="WatchScreen"
      screenOptions={{headerShown: false}}>
      <WatchStackNavigator.Screen name="WatchScreen" component={WatchScreen} />
    </WatchStackNavigator.Navigator>
  );
}
