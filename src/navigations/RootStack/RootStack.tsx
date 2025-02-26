import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from '../BottomTabStack/BottomTabStack';
import {RootStackParamList} from '../../models/RootStackParamsList';

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        initialRouteName="BottomTab"
        screenOptions={{headerShown: false}}>
        <RootStackNavigator.Screen
          name="BottomTab"
          component={BottomTabStack}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
}
