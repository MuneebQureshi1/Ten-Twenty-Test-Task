import {StyleSheet} from 'react-native';
import {Theme} from '../../../constants/Theme';
import {
  horizontalResponsive,
  verticalResponsive,
} from '../../../utils/responsiveControlFunctions';
import Fonts from '../../../constants/FontsFamily';

export const VideoPlayerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.black,
  },
  video: {
    width: '100%',
    height: '100%', // Fullscreen in landscape mode
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.blackWithOpacity5, // Semi-transparent background
  },
  closeButton: {
    position: 'absolute',
    top: verticalResponsive(20),
    left: horizontalResponsive(20),
    zIndex: 1,
    backgroundColor: Theme.bottomBarBackgroundColor, // Custom Theme Color
    width: horizontalResponsive(70), // Same width & height for perfect circle
    height: horizontalResponsive(30),
    borderRadius: horizontalResponsive(25), // Half of width/height for circle
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneText: {
    color: Theme.bottomBarActiveText,
    fontFamily: Fonts.Poppins500,
  },
});
