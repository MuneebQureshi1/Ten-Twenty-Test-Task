import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
interface SearchScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'SearchScreen'>;
}
const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
