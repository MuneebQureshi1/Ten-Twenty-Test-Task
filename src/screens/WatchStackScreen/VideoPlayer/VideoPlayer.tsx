import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {Theme} from '../../../constants/Theme';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import Entypo from 'react-native-vector-icons/Entypo';
import useGetApi from '../../../services/ApiHooks/getApis';
import useCallApiOnLoad from '../../../hooks/useCallApiOnload';
import {VideoPlayerStyles} from './VideoPlayeStyles';
import Loader from '../../../components/Loader/Loader';

const VideoPlayer = () => {
  const navigation = useNavigation();
  const {getMoviesTrailerApi} = useGetApi();
  const {data: moviesDetails, loading} = useCallApiOnLoad(
    getMoviesTrailerApi,
    '1126166',
  );

  const [videoKey, setVideoKey] = useState<string | null>(null);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    if (moviesDetails?.results?.length > 0) {
      const trailer = moviesDetails.results.find(
        (video: any) => video.type === 'Trailer' && video.site === 'YouTube',
      );
      if (trailer) {
        setVideoKey(trailer.key);
      }
    }
  }, [moviesDetails]);

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

      {/* Loader */}
      {loading ? (
        <Loader
          size="large"
          color="white"
          style={VideoPlayerStyles.loaderContainer}
        />
      ) : videoKey ? (
        <YoutubePlayer
          width={'100%'}
          height={'30%'}
          play={true}
          videoId={videoKey}
          initialPlayerParams={{
            start: 0,
            modestbranding: 1,
            rel: 0,
            showClosedCaptions: 0,
            iv_load_policy: 3,
            fs: 1, // Ensure fullscreen support
          }}
          onChangeState={(state: string) => {
            if (state === 'ended') {
              navigation.goBack(); // Go back when video ends
            }
          }}
          webViewProps={{
            allowsFullscreenVideo: true,
            scrollEnabled: false,
            overScrollMode: 'never',
            nestedScrollEnabled: false,
          }}
        />
      ) : null}
    </View>
  );
};

export default VideoPlayer;
