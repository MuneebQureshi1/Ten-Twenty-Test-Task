import React, {useRef, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {Theme} from '../../../constants/Theme';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../../../components/Loader/Loader';
import {VideoPlayerStyles} from './VideoPlayeStyles';

const VideoPlayer = () => {
  //@ts-ignore
  const videoRef = useRef<Video>(null);
  const navigation = useNavigation();
  const [isBuffering, setIsBuffering] = useState(true); // Buffering state

  useEffect(() => {
    // Lock screen to landscape when component mounts
    Orientation.lockToLandscape();

    return () => {
      // Lock back to portrait when leaving screen
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={VideoPlayerStyles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={VideoPlayerStyles.closeButton}
        onPress={() => navigation.goBack()}>
        <Entypo
          name="cross"
          color={Theme.white}
          size={horizontalResponsive(20)}
        />
      </TouchableOpacity>

      {/* Video Player */}
      <Video
        ref={videoRef}
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // Replace with your video URL
        style={VideoPlayerStyles.video}
        controls
        resizeMode="contain"
        paused={false} // Auto Play Video
        onEnd={() => navigation.goBack()} // Navigate back when video ends
        onBuffer={({isBuffering}) => setIsBuffering(isBuffering)} // Handle Buffering
        onReadyForDisplay={() => setIsBuffering(false)} // Hide loader when ready
      />

      {/* Loader for Buffering */}
      {isBuffering && (
        <View style={VideoPlayerStyles.loaderContainer}>
          <Loader />
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;
