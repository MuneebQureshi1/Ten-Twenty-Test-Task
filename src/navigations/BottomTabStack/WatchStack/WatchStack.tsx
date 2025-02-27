import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import WatchScreen from '../../../screens/WatchStackScreen/WatchMainScreen/WatchScreen';
import MovieDetailScreen from '../../../screens/WatchStackScreen/MovieDetailScreen/MovieDetailScreen';
import VideoPlayer from '../../../screens/WatchStackScreen/VideoPlayer/VideoPlayer';
import SearchScreen from '../../../screens/WatchStackScreen/SearchScreen/SearchScreen';

const WatchStackNavigator = createNativeStackNavigator<WatchStackParamsList>();

export default function WatchStack() {
  return (
    <WatchStackNavigator.Navigator
      initialRouteName="WatchScreen"
      screenOptions={{headerShown: false, animation: 'ios_from_right'}}>
      <WatchStackNavigator.Screen name="WatchScreen" component={WatchScreen} />
      <WatchStackNavigator.Screen
        name="DetailScreen"
        component={MovieDetailScreen}
      />
      <WatchStackNavigator.Screen name="VideoPlayer" component={VideoPlayer} />
      <WatchStackNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </WatchStackNavigator.Navigator>
  );
}
