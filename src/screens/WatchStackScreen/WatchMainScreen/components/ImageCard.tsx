import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../../../../constants/Theme';
import {WatchMainScreenStyles} from '../WatchScreenStyles';

interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({imageUrl, title}) => {
  return (
    <View style={WatchMainScreenStyles.container}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={WatchMainScreenStyles.imageBackground}>
        <LinearGradient
          colors={[Theme.transparent, Theme.blackWithOpacity9]}
          style={WatchMainScreenStyles.gradient}
        />
        <Text style={WatchMainScreenStyles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageCard;
