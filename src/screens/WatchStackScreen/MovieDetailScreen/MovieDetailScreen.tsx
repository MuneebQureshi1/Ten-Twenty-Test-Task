import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Theme} from '../../../constants/Theme';
import {useHideTabBar} from '../../../hooks/useHideTabBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import {TextList} from '../../../constants/TextList';
import {globalStyle} from '../../../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {WatchMainScreenStyles} from '../WatchMainScreen/WatchScreenStyles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {CustomText} from '../../../components/CustomText/CustomText';
import {MovieDetailScreenStyles} from './MovieDetailScreenStyle';
import {getImageUrl, getRandomColor} from '../../../utils/Helper';
import useGetApi from '../../../services/ApiHooks/getApis';
import useCallApiOnLoad from '../../../hooks/useCallApiOnload';
import CustomShimmer from '../../../components/CustomShimmer/CustomShimmer';
import {useMovie} from '../../../context/MovieContext';
import moment from 'moment';
import {SafeAreaView} from 'react-native';

interface MovieDetailScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'DetailScreen'>;
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({navigation}) => {
  // const {movieId} = route.params || '';
  const {movieId} = useMovie();

  useHideTabBar({navigation});
  const {getMoviesDetailApi} = useGetApi();
  const {data: moviesDetails, loading} = useCallApiOnLoad(
    getMoviesDetailApi,
    movieId,
  );
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={MovieDetailScreenStyles.scrollView}>
      {/* Background Image with Shimmer Effect */}
      {loading ? (
        <CustomShimmer
          style={[MovieDetailScreenStyles.imageBackground, globalStyle.w100]}
        />
      ) : (
        <ImageBackground
          source={{
            uri: getImageUrl(moviesDetails?.poster_path),
          }}
          style={MovieDetailScreenStyles.imageBackground}>
          <LinearGradient
            colors={[Theme.transparent, Theme.blackWithOpacity9]}
            style={WatchMainScreenStyles.gradient}>
            <SafeAreaView />
            <View style={MovieDetailScreenStyles.gradientContainer}>
              <View style={MovieDetailScreenStyles.headerContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={globalStyle.verticalAlignment}>
                  <AntDesign
                    name={'left'}
                    color={Theme.bottomBarActiveText}
                    size={horizontalResponsive(18)}
                  />
                </TouchableOpacity>
                <View style={globalStyle.verticalAlignment}>
                  <CustomText style={MovieDetailScreenStyles.watchText}>
                    {TextList.watch}
                  </CustomText>
                </View>
              </View>
              <View style={MovieDetailScreenStyles.bottomContainer}>
                {loading ? (
                  // @ts-ignore
                  <CustomShimmer style={MovieDetailScreenStyles.releaseDate} />
                ) : (
                  <CustomText style={MovieDetailScreenStyles.releaseDate}>
                    In theaters{' '}
                    {moment(moviesDetails?.release_date).format(
                      'MMMM DD, YYYY',
                    )}
                  </CustomText>
                )}
                <CustomButton title={TextList.get_tickets} />
                <CustomButton
                  title={TextList.watch_trailer}
                  textStyle={MovieDetailScreenStyles.trailerText}
                  style={MovieDetailScreenStyles.trailerButton}
                  onPress={() => {
                    navigation.navigate('VideoPlayer');
                  }}
                  leftIcon={
                    <Entypo
                      name="controller-play"
                      color={Theme.bottomBarActiveText}
                      size={horizontalResponsive(20)}
                      style={MovieDetailScreenStyles.playIcon}
                    />
                  }
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}

      <View style={MovieDetailScreenStyles.container}>
        {/* Genres */}
        <CustomText style={MovieDetailScreenStyles.sectionTitle}>
          {TextList.genres}
        </CustomText>
        <View style={MovieDetailScreenStyles.genreContainer}>
          {loading
            ? Array.from({length: 3}).map((_, index) => (
                <CustomShimmer
                  key={index}
                  style={MovieDetailScreenStyles.genreshimmer}
                />
              ))
            : moviesDetails?.genres?.map(
                (genre: {id: number; name: string}) => (
                  <View
                    key={genre?.id}
                    style={[
                      MovieDetailScreenStyles.genreBadge,
                      {backgroundColor: getRandomColor()},
                    ]}>
                    <CustomText style={MovieDetailScreenStyles.genreCustomText}>
                      {genre?.name}
                    </CustomText>
                  </View>
                ),
              )}
        </View>

        {/* Overview */}
        <CustomText style={MovieDetailScreenStyles.sectionTitle}>
          {TextList.overview}
        </CustomText>
        {loading ? (
          <CustomShimmer style={MovieDetailScreenStyles.OverViewShimmer} />
        ) : (
          <CustomText style={MovieDetailScreenStyles.overviewCustomText}>
            {moviesDetails?.overview}
          </CustomText>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
