import { Platform, StyleSheet } from "react-native";
import {
  horizontalResponsive,
  verticalResponsive,
} from "../utils/responsiveControlFunctions";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Theme } from "../constants/Theme";
import Fonts from "../constants/FontsFamily";

export const globalStyle = StyleSheet.create({
  elevation0: {
    elevation: 0,
  },
  bottomBarStlye: {
    elevation: 0,
    height: verticalResponsive(75),
    backgroundColor: Theme.bottomBarBackgroundColor,
    borderTopWidth: 0,
    borderTopLeftRadius:horizontalResponsive(27),
    borderTopRightRadius:horizontalResponsive(27),
    paddingTop:verticalResponsive(10),
    overflow: 'hidden', // Ensures no extra background is visible
    position: 'absolute', // Helps in avoiding unwanted background overlay
  },
  Flex1: {
    flex: 1,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: hp(80),
  },
  headerStyle: {
    flexDirection: "row",
    height: verticalResponsive(48),
    justifyContent: "space-between",
    paddingHorizontal: horizontalResponsive(20),
  },
  verticalAlignment: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextStyle: {
    fontSize: horizontalResponsive(17),
    fontWeight: "bold",
  },
  mL30: {
    marginLeft: verticalResponsive(30),
  },
  fs10:{fontSize:horizontalResponsive(10)},
  row:{
    flexDirection:'row'
  },
  space_between:{
    justifyContent:'space-between'
  },
  button: {
    backgroundColor: Theme.buttonBackground,
    height: verticalResponsive(50),
    width: horizontalResponsive(243),
    borderRadius: horizontalResponsive(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Theme.bottomBarActiveText,
    fontSize: horizontalResponsive(14),
    fontFamily: Fonts.Poppins500,
  },
  disabled: {
    backgroundColor: Theme.disabledButton,
  },
  w100:{
    width:'100%'
  },
  selfCenter:{
    alignSelf:'center'
  },
  customInputContainer: {
    width: '100%',
    marginTop: verticalResponsive(30),
  },
  customText: {
    fontSize: horizontalResponsive(14),
    marginBottom: verticalResponsive(5),
  },
  inputContainer: {
    width: '100%',
  },
  innerContainer: {
    borderBottomWidth: 0,
    paddingHorizontal: horizontalResponsive(10),
    height: horizontalResponsive(52),
    borderRadius: horizontalResponsive(30),
    backgroundColor: Theme.screenBackground,
  },
  input: {
    fontSize: horizontalResponsive(16),
    fontFamily: Fonts.Poppins400,
  },
});
