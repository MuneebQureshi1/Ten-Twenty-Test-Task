import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../../../../constants/Theme';
import {WatchMainScreenStyles} from '../WatchScreenStyles';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  onPress: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({imageUrl, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={WatchMainScreenStyles.container}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={WatchMainScreenStyles.imageBackground}>
        <LinearGradient
          colors={[Theme.transparent, Theme.blackWithOpacity1]}
          style={WatchMainScreenStyles.gradient}
        />
        <Text style={WatchMainScreenStyles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImageCard;
