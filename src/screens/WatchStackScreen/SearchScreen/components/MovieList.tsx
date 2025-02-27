import React, {useEffect} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Theme} from '../../../../constants/Theme';
import {SearchScreenStyles} from '../SearchScreenStyles';
import useGetApi from '../../../../services/ApiHooks/getApis';
import useCallApiWhenRequired from '../../../../hooks/useCallApiWhenRequired';
import {getImageUrl} from '../../../../utils/Helper';
import {CustomText} from '../../../../components/CustomText/CustomText';
import Loader from '../../../../components/Loader/Loader';
import {TextList} from '../../../../constants/TextList';
import {useMovie} from '../../../../context/MovieContext';
import {useNavigation} from '@react-navigation/native';
import {verticalResponsive} from '../../../../utils/responsiveControlFunctions';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type MovieListProps = {
  search: string;
  setTotalMoviesNumber: (count: number) => void;
};

const MovieList: React.FC<MovieListProps> = ({
  search,
  setTotalMoviesNumber,
}) => {
  const {updateMovieId} = useMovie();
  const navigation = useNavigation<any>();
  const {searchMovieApi} = useGetApi();
  const {
    data: searchedData,
    callApi,
    loading,
  } = useCallApiWhenRequired(searchMovieApi);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const trimSearch = search.trim();
      if (trimSearch) {
        callApi(search);
      }
    }, 500); // Delay API call by 500ms

    return () => clearTimeout(delayDebounce); // Cleanup timeout on unmount or re-run
  }, [search]);

  useEffect(() => {
    //@ts-ignore
    if (searchedData?.results) {
      //@ts-ignore
      setTotalMoviesNumber(searchedData?.results?.length);
    } //@ts-ignore
  }, [searchedData?.results]);

  return (
    <View style={SearchScreenStyles.MovieListcontainer}>
      {loading ? (
        <View style={SearchScreenStyles.h100}>
          <Loader size="large" color={Theme.buttonBackground} />
        </View> //@ts-ignore
      ) : searchedData?.results?.length === 0 ? (
        <CustomText style={SearchScreenStyles.noMovieFound}>
          {TextList.no_movies_found}
        </CustomText>
      ) : (
        <FlatList //@ts-ignore
          data={searchedData.results}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={SearchScreenStyles.movieFlatListConatiner}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                updateMovieId(item.id);
                navigation.navigate('DetailScreen');
              }}
              style={SearchScreenStyles.movieItem}>
              <Image
                source={{uri: getImageUrl(item.backdrop_path)}}
                style={SearchScreenStyles.MovieListimage}
              />
              <View style={SearchScreenStyles.MovieListtextContainer}>
                <CustomText style={SearchScreenStyles.MovieListtitle}>
                  {item.title}
                </CustomText>
                <CustomText style={SearchScreenStyles.MovieListgenre}>
                  {item.genre || TextList.no_genre_available}
                </CustomText>
              </View>
              <TouchableOpacity>
                <Entypo
                  name="dots-three-horizontal"
                  size={18}
                  color={Theme.buttonBackground}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default MovieList;
