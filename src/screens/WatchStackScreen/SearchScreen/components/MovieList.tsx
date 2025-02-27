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

type MovieListProps = {
  search: string;
};

const MovieList: React.FC<MovieListProps> = ({search}) => {
  const {searchMovieApi} = useGetApi();
  const {
    data: searchedData,
    callApi,
    loading,
  } = useCallApiWhenRequired(searchMovieApi);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search) {
        callApi(search);
      }
    }, 500); // Delay API call by 500ms

    return () => clearTimeout(delayDebounce); // Cleanup timeout on unmount or re-run
  }, [search]);

  return (
    <View style={SearchScreenStyles.MovieListcontainer}>
      {loading ? (
        <Loader size="large" color={Theme.buttonBackground} /> //@ts-ignore
      ) : searchedData?.results?.length === 0 ? (
        <CustomText style={SearchScreenStyles.noMovieFound}>
          {TextList.no_movies_found}
        </CustomText>
      ) : (
        <FlatList //@ts-ignore
          data={searchedData?.results}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={
            SearchScreenStyles.categoryFlatListContainerStyle
          }
          renderItem={({item}) => (
            <View style={SearchScreenStyles.movieItem}>
              <Image
                source={{uri: getImageUrl(item?.backdrop_path)}}
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
            </View>
          )}
        />
      )}
    </View>
  );
};

export default MovieList;
