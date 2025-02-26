import { Platform, StyleSheet } from "react-native";
import { horizontalResponsive, verticalResponsive } from "../../../utils/responsiveControlFunctions";
import { Theme } from "../../../constants/Theme";
import Fonts from "../../../constants/FontsFamily";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { globalStyle } from "../../../styles/globalStyles";

export const MovieDetailScreenStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Theme.mainBackgroundColor,
      },
      imageBackground: {
        height: hp(60),
      },
      gradientContainer: {
        justifyContent: 'space-between',
        flex: 1,
      },
      headerContainer: {
        ...globalStyle.row,
        gap: horizontalResponsive(20),
        marginTop: verticalResponsive(20),
        marginLeft: horizontalResponsive(20),
      },
      watchText: {
        color: Theme.bottomBarActiveText,
        fontSize: horizontalResponsive(16),
        fontFamily: Fonts.Poppins500,
        marginTop: verticalResponsive(2),
      },
      bottomContainer: {
        alignItems: 'center',
        marginBottom: verticalResponsive(30),
        gap: verticalResponsive(15),
      },
      releaseDate: {
        color: Theme.bottomBarActiveText,
        fontFamily: Fonts.Poppins500,
        fontSize: horizontalResponsive(16),
      },
      trailerText: {
        fontFamily: Fonts.Poppins600,
        marginTop: horizontalResponsive(1),
      },
      trailerButton: {
        backgroundColor: Theme.transparent,
        borderWidth: 1,
        borderColor: Theme.buttonBackground,
      },
      playIcon: {
        marginRight: horizontalResponsive(5),
      },
   
    container: {
      padding: horizontalResponsive(20),
      width: horizontalResponsive(350),
      alignSelf: 'center',
    },
    sectionTitle: {
      fontSize: horizontalResponsive(16),
      fontFamily: Fonts.Poppins500,
      color: Theme.TextColor,
      marginBottom: 10,
    },
    genreContainer: {
      flexDirection: 'row',
      gap: horizontalResponsive(8),
      flexWrap: 'wrap',
      marginBottom: verticalResponsive(20),
      borderBottomWidth: 0.2,
      borderBottomColor: Theme.blackWithOpacity5,
      paddingBottom: verticalResponsive(20),
    },
    genreBadge: {
      borderRadius: horizontalResponsive(16),
      // paddingVertical: 6,
      paddingHorizontal: 12,
      height: verticalResponsive(24),
      justifyContent: 'center',
      alignItems: 'center',
    },
    genreCustomText: {
      color: Theme.bottomBarActiveText,
      fontFamily: Fonts.Poppins600,
      fontSize: horizontalResponsive(12),
      marginTop: Platform.OS === 'android' ? verticalResponsive(2) : 0,
    },
    overviewCustomText: {
      fontSize: horizontalResponsive(12),
      fontFamily: Fonts.Poppins400,
      color: Theme.overviewText,
      lineHeight: 19.2,
    },
  });