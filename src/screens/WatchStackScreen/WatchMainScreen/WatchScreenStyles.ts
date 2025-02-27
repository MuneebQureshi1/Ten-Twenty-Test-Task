import { StyleSheet } from "react-native";
import { horizontalResponsive, verticalResponsive } from "../../../utils/responsiveControlFunctions";
import { Theme } from "../../../constants/Theme";
import Fonts from "../../../constants/FontsFamily";
import { globalStyle } from "../../../styles/globalStyles";

export const WatchMainScreenStyles = StyleSheet.create({
    container: {
      borderRadius: horizontalResponsive(10),
      overflow: 'hidden',
      width: horizontalResponsive(370),
      height: verticalResponsive(180),
      marginTop:verticalResponsive(20)
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    },
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    title: {
      color: Theme.white,
      fontFamily: Fonts.Poppins500,
      fontSize: horizontalResponsive(18),
      marginLeft: horizontalResponsive(20),
      marginBottom: verticalResponsive(10),
    },
    screenContainer: {
      paddingBottom: verticalResponsive(50),
    },
    headerContainer: {
      ...globalStyle.row,
      ...globalStyle.space_between,
      backgroundColor: Theme.mainBackgroundColor,
      height: verticalResponsive(60),
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      paddingHorizontal: horizontalResponsive(20),
    },
    headerText: {
      fontSize: horizontalResponsive(16),
      fontFamily: Fonts.Poppins500,
      color: Theme.TextColor,
    },
    listContainer: {
      backgroundColor: Theme.screenBackground,
      flex: 1,
      height:"100%"
    },
    flatListContent: {
      marginTop: verticalResponsive(10),
      alignItems: 'center',
      flex:1,
      height:"100%",
      paddingBottom: verticalResponsive(90),

    },
  });