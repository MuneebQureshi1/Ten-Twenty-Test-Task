import {View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenConatiner';
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
import MovieList from './components/MovieList';
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
            placeholder={TextList.search_placeholder}
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
                onPress={() => {
                  if (search.length !== 0) {
                    setSearch('');
                  } else {
                    navigation.goBack();
                  }
                }}
              />
            }
          />
        </View>
      }>
      {search.length === 0 ? (
        <CategorySection />
      ) : (
        <MovieList search={search} />
      )}
    </ScreenContainer>
  );
};

export default SearchScreen;
