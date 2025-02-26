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
              imageUrl={
                'https://s3-alpha-sig.figma.com/img/67e5/8d98/a6c9dc28d80d81e32db6ab2b816cb5c3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IDsJGS8JjleHN3A8TF4pWc19bKn5v0OuKynkdDdMCUiW-rT7jhoEDXdiS0aPucpBDAWDStsUpDa6v6O0QkK8vHfXSzR-CXC-mdjsmh-0bDzZHaG0yO-7YGRsRkx9B6izsCJOCVHfh9Qwgsly7r1bQOurrzqSVQZWlbExJ2V-Imt5RRYJTk1aOZ2K77DbByM2rlw8kNiuTbP~oo2V8-wt5fGF~EG31l7cwpW5Gqzex5OC50kIvpFxY6tNh4FxXsovibVBy3xH4cqYTC3Brtv7OYUtKVdv--GaNlWMuZ-CyG01MWcXG4ahXgoxHVI656EJDj7vga7U9UE48BFFqR4HPA__'
              }
              title={item?.title}
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default WatchScreen;
