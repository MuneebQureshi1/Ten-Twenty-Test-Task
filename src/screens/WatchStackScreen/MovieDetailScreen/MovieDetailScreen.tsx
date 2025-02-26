import {ImageBackground, ScrollView, View} from 'react-native';
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
import {getRandomColor} from '../../../utils/Helper';

interface MovieDetailScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'DetailScreen'>;
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({navigation}) => {
  useHideTabBar({navigation});

  const genres = ['Action', 'Thriller', 'Science', 'Fiction'];

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={MovieDetailScreenStyles.scrollView}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/vtdEHG1j07PqLlVyhKNZRHTPKGt.jpg`,
        }}
        style={MovieDetailScreenStyles.imageBackground}>
        <LinearGradient
          colors={[Theme.transparent, Theme.blackWithOpacity9]}
          style={WatchMainScreenStyles.gradient}>
          <View style={MovieDetailScreenStyles.gradientContainer}>
            <View style={MovieDetailScreenStyles.headerContainer}>
              <View style={globalStyle.verticalAlignment}>
                <AntDesign
                  name={'left'}
                  color={Theme.bottomBarActiveText}
                  size={horizontalResponsive(18)}
                />
              </View>
              <View style={globalStyle.verticalAlignment}>
                <CustomText style={MovieDetailScreenStyles.watchText}>
                  {TextList.watch}
                </CustomText>
              </View>
            </View>
            <View style={MovieDetailScreenStyles.bottomContainer}>
              <CustomText style={MovieDetailScreenStyles.releaseDate}>
                In theaters December 22, 2021
              </CustomText>
              <CustomButton title={TextList.get_tickets} />
              <CustomButton
                title={TextList.watch_trailer}
                textStyle={MovieDetailScreenStyles.trailerText}
                style={MovieDetailScreenStyles.trailerButton}
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
      <View style={MovieDetailScreenStyles.container}>
        <CustomText style={MovieDetailScreenStyles.sectionTitle}>
          {TextList.genres}
        </CustomText>
        <View style={MovieDetailScreenStyles.genreContainer}>
          {genres.map((genre, index) => (
            <View
              key={index}
              style={[
                MovieDetailScreenStyles.genreBadge,
                {backgroundColor: getRandomColor()},
              ]}>
              <CustomText style={MovieDetailScreenStyles.genreCustomText}>
                {genre}
              </CustomText>
            </View>
          ))}
        </View>

        <CustomText style={MovieDetailScreenStyles.sectionTitle}>
          {TextList.overview}
        </CustomText>
        <CustomText style={MovieDetailScreenStyles.overviewCustomText}>
          As a collection of history's worst tyrants and criminal masterminds
          gather to plot a war to wipe out millions, one man must race against
          time to stop them. Discover the origins of the very first independent
          intelligence agency in The King's Man. The comic book "The Secret
          Service" by Mark Millar and Dave Gibbons.
        </CustomText>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
