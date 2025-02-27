import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Theme} from '../../../../constants/Theme';
import {SearchScreenStyles} from '../SearchScreenStyles';

const movies = [
  {
    id: '1',
    title: 'Timeless',
    genre: 'Fantasy',
    // image: require('./assets/timeless.jpg'),
  },
  {
    id: '2',
    title: 'In Time',
    genre: 'Sci-Fi',
    // image: require('./assets/in_time.jpg'),
  },
  {
    id: '3',
    title: 'A Time To Kill',
    genre: 'Crime',
    // image: require('./assets/a_time_to_kill.jpg'),
  },
];

const MovieList = () => {
  return (
    <View style={SearchScreenStyles.MovieListcontainer}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={
          SearchScreenStyles.categoryFlatListContainerStyle
        }
        renderItem={({item}) => (
          <View style={SearchScreenStyles.movieItem}>
            <Image
              //@ts-ignore
              source={item.image}
              style={SearchScreenStyles.MovieListimage}
            />
            <View style={SearchScreenStyles.MovieListtextContainer}>
              <Text style={SearchScreenStyles.MovieListtitle}>
                {item.title}
              </Text>
              <Text style={SearchScreenStyles.MovieListgenre}>
                {item.genre}
              </Text>
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
    </View>
  );
};

export default MovieList;
