import React, {useState} from 'react';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import {CustomText} from '../../../../components/CustomText/CustomText';
import {SearchScreenStyles} from '../SearchScreenStyles';
import {categories} from '../../../../constants/constantsArray';
import CustomShimmer from '../../../../components/CustomShimmer/CustomShimmer';

const CategorySection = () => {
  return (
    <View style={SearchScreenStyles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.name}
        scrollEnabled={false}
        contentContainerStyle={
          SearchScreenStyles.categoryFlatListContainerStyle
        }
        numColumns={2}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

const CategoryItem = ({item}: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      {loading && <CustomShimmer style={[SearchScreenStyles.item]} />}
      <TouchableOpacity activeOpacity={0.5}>
        <ImageBackground
          source={{uri: item.image}}
          style={SearchScreenStyles.item}
          imageStyle={SearchScreenStyles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}>
          {/* Overlay */}
          <View style={SearchScreenStyles.overlay} />

          {/* Loading Indicator */}

          <CustomText style={SearchScreenStyles.text}>{item.name}</CustomText>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

export default CategorySection;
