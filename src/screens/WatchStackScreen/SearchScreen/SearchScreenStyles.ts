import {StyleSheet} from 'react-native';
import {
  horizontalResponsive,
  verticalResponsive,
} from '../../../utils/responsiveControlFunctions';
import {Theme} from '../../../constants/Theme';
import Fonts from '../../../constants/FontsFamily';
import {heightPercentageToDP, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SearchScreenStyles = StyleSheet.create({
  container: {
    padding: horizontalResponsive(10),
    backgroundColor: Theme.mainBackgroundColor,
    alignSelf: 'center',
  },
  item: {
    width: horizontalResponsive(163),
    height: verticalResponsive(100),
    margin: 10,
    justifyContent: 'flex-end',
    borderRadius: horizontalResponsive(10),
    overflow: 'hidden',
  },
  image: {
    borderRadius: horizontalResponsive(10),
  },
  text: {
    color: Theme.bottomBarActiveText,
    fontSize: horizontalResponsive(16),
    fontFamily: Fonts.Poppins500,
    marginBottom: verticalResponsive(10),
    marginLeft: horizontalResponsive(10),
  },
  categoryFlatListContainerStyle: {
    height: hp(90),
    backgroundColor: Theme.screenBackground,
    paddingTop:verticalResponsive(20)
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers entire image
    backgroundColor: Theme.blackWithOpacity3, // Dark shade (adjust opacity as needed)
  },
  searchHeader: {
    backgroundColor: Theme.mainBackgroundColor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: horizontalResponsive(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MovieListcontainer: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 16,
    height:heightPercentageToDP(90)
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.screenBackground,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  MovieListimage: {
    width: horizontalResponsive(130),
    height: verticalResponsive(100),
    borderRadius: horizontalResponsive(10),
  },
  MovieListtextContainer: {
    flex: 1,
    marginLeft: horizontalResponsive(12),
  },
  MovieListtitle: {
    fontSize: horizontalResponsive(16),
    fontFamily: Fonts.Poppins500,
    color: Theme.TextColor,
  },
  MovieListgenre: {
    fontSize: horizontalResponsive(12),
    color: Theme.genreText,
    fontFamily: Fonts.Poppins500,
  },
  noMovieFound:{
    color: Theme.TextColor,
    alignSelf: 'center',
    fontSize: horizontalResponsive(15),
    fontFamily: Fonts.Poppins600,
  }
});
