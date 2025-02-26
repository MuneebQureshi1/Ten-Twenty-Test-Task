import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import useGetApi from '../../../services/ApiHooks/getApis';
import useCallApiOnLoad from '../../../hooks/useCallApiOnload';
import {VideoPlayerStyles} from './VideoPlayeStyles';
import Loader from '../../../components/Loader/Loader';
import {WatchStackParamsList} from '../../../models/WatchStackParamsList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomText} from '../../../components/CustomText/CustomText';
import {useMovie} from '../../../context/MovieContext';
interface MovieDetailScreenProps {
  navigation: NativeStackNavigationProp<WatchStackParamsList, 'VideoPlayer'>;
}
const VideoPlayer: React.FC<MovieDetailScreenProps> = ({navigation}) => {
  const {movieId} = useMovie();

  const {getMoviesTrailerApi} = useGetApi();
  const {data: moviesDetails, loading} = useCallApiOnLoad(
    getMoviesTrailerApi,
    movieId,
  );

  const [videoKey, setVideoKey] = useState<string | null>(null);

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
        <CustomText style={VideoPlayerStyles.doneText}>Done</CustomText>
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
