import {FlatList, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenConatiner';
import {CustomText} from '../../../components/CustomText/CustomText';
import {TextList} from '../../../constants/TextList';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import {Theme} from '../../../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyle} from '../../../styles/globalStyles';
import ImageCard from './components/ImageCard';
import {WatchMainScreenStyles} from './WatchScreenStyles';
import useGetApi from '../../../services/ApiHooks/getApis';
import useCallApiOnLoad from '../../../hooks/useCallApiOnload';
import {getImageUrl} from '../../../utils/Helper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import {useMovie} from '../../../context/MovieContext';
interface WatchScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'WatchScreen'>;
}

const WatchScreen: React.FC<WatchScreenProps> = ({navigation}) => {
  const {updateMovieId} = useMovie();
  const {getAllUpcomingMoviesApi} = useGetApi();
  const {data: upcomingMoviesData, loading} = useCallApiOnLoad(
    getAllUpcomingMoviesApi,
  );
  return (
    <ScreenContainer
      style={WatchMainScreenStyles.screenContainer}
      loading={loading}
      headerComponent={
        <View style={WatchMainScreenStyles.headerContainer}>
          <View style={globalStyle.verticalAlignment}>
            <CustomText style={WatchMainScreenStyles.headerText}>
              {TextList.watch}
            </CustomText>
          </View>
          <View style={globalStyle.verticalAlignment}>
            <AntDesign
              name={'search1'}
              size={horizontalResponsive(14.25)}
              color={Theme.TextColor}
            />
          </View>
        </View>
      }>
      <View style={WatchMainScreenStyles.listContainer}>
        <FlatList
          data={upcomingMoviesData?.results}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={WatchMainScreenStyles.flatListContent}
          renderItem={({item}) => (
            <ImageCard
              imageUrl={getImageUrl(item?.backdrop_path)}
              title={item?.title}
              onPress={() => {
                updateMovieId(item?.id);
                navigation.navigate('DetailScreen');
              }}
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default WatchScreen;
