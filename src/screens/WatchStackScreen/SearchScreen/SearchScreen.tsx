import {Keyboard, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenConatiner';
import {TextList} from '../../../constants/TextList';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import {Theme} from '../../../constants/Theme';
import CustomInput from '../../../components/CustomInput/CustomInput';
import {Icon} from '@rneui/base';
import CategorySection from './components/CategorySection';
import {SearchScreenStyles} from './SearchScreenStyles';
import MovieList from './components/MovieList';
import {globalStyle} from '../../../styles/globalStyles';
import {CustomText} from '../../../components/CustomText/CustomText';
import {MovieDetailScreenStyles} from '../MovieDetailScreen/MovieDetailScreenStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface SearchScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'SearchScreen'>;
}
const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [totalMovies, setTotalMovies] = useState(0);
  const [showTotalMovies, setShowTotalMovies] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'},
      });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: globalStyle.bottomBarStlye,
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <ScreenContainer
      headerComponent={
        <View style={SearchScreenStyles.searchHeader}>
          {showTotalMovies ? (
            <View
              style={[
                MovieDetailScreenStyles.headerContainer,
                SearchScreenStyles.resultFOoundHeader,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={globalStyle.verticalAlignment}>
                <AntDesign
                  name={'left'}
                  color={Theme.TextColor}
                  size={horizontalResponsive(18)}
                />
              </TouchableOpacity>
              <View style={globalStyle.verticalAlignment}>
                <CustomText
                  style={[
                    MovieDetailScreenStyles.watchText,
                    SearchScreenStyles.resultFoundText,
                  ]}>
                  {totalMovies} {TextList.results_found}
                </CustomText>
              </View>
            </View>
          ) : (
            <CustomInput
              placeholder={TextList.search_placeholder}
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={() => {
                setShowTotalMovies(true);
              }}
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
          )}
        </View>
      }>
      {search.length === 0 ? (
        <CategorySection />
      ) : (
        <MovieList search={search} setTotalMoviesNumber={setTotalMovies} />
      )}
    </ScreenContainer>
  );
};

export default SearchScreen;
