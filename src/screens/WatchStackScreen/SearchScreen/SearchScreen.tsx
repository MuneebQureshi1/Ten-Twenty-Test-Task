import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenConatiner';
import {WatchMainScreenStyles} from '../WatchMainScreen/WatchScreenStyles';
import {CustomText} from '../../../components/CustomText/CustomText';
import {globalStyle} from '../../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextList} from '../../../constants/TextList';
import {
  horizontalResponsive,
  verticalResponsive,
} from '../../../utils/responsiveControlFunctions';
import {Theme} from '../../../constants/Theme';
import CustomInput from '../../../components/CustomInput/CustomInput';
import {Icon} from '@rneui/base';
import CategorySection from './components/CategorySection';
import {SearchScreenStyles} from './SearchScreenStyles';
interface SearchScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'SearchScreen'>;
}
const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <ScreenContainer
      headerComponent={
        <View style={SearchScreenStyles.searchHeader}>
          <CustomInput
            placeholder="TV shows, movies and more"
            value={search}
            onChangeText={setSearch}
            leftIcon={
              <Icon
                name="search"
                type="feather"
                size={horizontalResponsive(18.5)}
                color={Theme.TextColor}
              />
            }
            rightIcon={
              <Icon
                name="x"
                type="feather"
                size={horizontalResponsive(15)}
                color={Theme.TextColor}
                onPress={() => setSearch('')}
              />
            }
          />
        </View>
      }>
      <CategorySection />
    </ScreenContainer>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
