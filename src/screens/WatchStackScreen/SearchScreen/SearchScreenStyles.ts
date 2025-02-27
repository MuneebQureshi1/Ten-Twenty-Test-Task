import {StyleSheet} from 'react-native';
import {
  horizontalResponsive,
  verticalResponsive,
} from '../../../utils/responsiveControlFunctions';
import {Theme} from '../../../constants/Theme';
import Fonts from '../../../constants/FontsFamily';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
});
