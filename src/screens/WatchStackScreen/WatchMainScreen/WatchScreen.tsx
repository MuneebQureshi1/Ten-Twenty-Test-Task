import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
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

const WatchScreen = () => {
  const {getAllUpcomingMoviesApi} = useGetApi();
  const {data: upcomingMoviesData, loading} = useCallApiOnLoad(
    getAllUpcomingMoviesApi,
  );
  useEffect(() => {
    if (upcomingMoviesData) {
      console.log('data', upcomingMoviesData);
    }
  }, [upcomingMoviesData]);

  return (
    <ScreenContainer
      style={WatchMainScreenStyles.screenContainer}
      loading={loading}>
      {/* Header */}
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
            color={Theme.black}
          />
        </View>
      </View>
      <View style={WatchMainScreenStyles.listContainer}>
        <FlatList
          data={upcomingMoviesData?.results}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={WatchMainScreenStyles.flatListContent}
          renderItem={({item}) => (
            <ImageCard
              imageUrl={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              title={item?.title}
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default WatchScreen;
