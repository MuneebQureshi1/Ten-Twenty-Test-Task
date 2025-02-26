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
  defaultInputStyle: {
    width: horizontalResponsive(361),
    height: verticalResponsive(44),
    alignSelf: "center",
    borderRadius: horizontalResponsive(360),
    backgroundColor: Theme.inputBackgroundColor,
    paddingHorizontal: horizontalResponsive(15),
    borderBottomWidth: 0,
  },
  inputDefaultTextStyle: {
    fontSize: horizontalResponsive(17),
    color: Theme.SearchInputPlaceHolderColor,
  },
  buttonContainer: {
    height: verticalResponsive(88),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Theme.white,
    fontSize: horizontalResponsive(17),
    fontWeight: "medium",
  },
  comingsoonImage: {
    width: horizontalResponsive(400),
    height: verticalResponsive(400),
    resizeMode: "cover",
  },
  CustomTextAreacontainer: {
    flexDirection: "row",
    borderRadius: horizontalResponsive(20),
    marginHorizontal: horizontalResponsive(20),
  },
  CustomTextAreaiconLeft: {
    backgroundColor: Theme.inputBackgroundColor,
    borderTopLeftRadius: horizontalResponsive(20),
    borderBottomLeftRadius: horizontalResponsive(20),
    paddingTop: verticalResponsive(10),
    paddingLeft: horizontalResponsive(10),
  },
  CustomTextAreaiconRight: {
    marginLeft: horizontalResponsive(8),
  },
  textArea: {
    flex: 1,
    height: verticalResponsive(200), // Default height for textarea
    textAlignVertical: "top",
    textAlign: "left",
    borderTopRightRadius: horizontalResponsive(20),
    borderBottomRightRadius: horizontalResponsive(20),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    paddingLeft: horizontalResponsive(5),
  },
  errorText: {
    color: Theme.red,
    fontSize: horizontalResponsive(12),
    marginTop: verticalResponsive(5),
    marginLeft: horizontalResponsive(20),
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
  }
});
