import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Loader from '../Loader/Loader';
import {globalStyle} from '../../styles/globalStyles';

type CustomButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  textStyle?: object;
  leftIcon?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[globalStyle.button, disabled && globalStyle.disabled, style]}>
      {loading ? (
        <Loader />
      ) : (
        <View style={globalStyle.row}>
          <View style={globalStyle.verticalAlignment}>{leftIcon}</View>
          <Text style={[globalStyle.text, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
