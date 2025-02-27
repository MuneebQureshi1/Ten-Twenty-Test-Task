import {Input} from '@rneui/base';
import React from 'react';
import {View, Text, TextInputProps} from 'react-native';
import {Theme} from '../../constants/Theme';
import {globalStyle} from '../../styles/globalStyles';

interface CustomInputProps extends TextInputProps {
  customText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  customText,
  leftIcon,
  rightIcon,
  value,
  ...rest
}) => {
  return (
    <View style={globalStyle.customInputContainer}>
      {customText && <Text style={globalStyle.customText}>{customText}</Text>}
      <Input
        {...rest}
        value={value}
        containerStyle={globalStyle.inputContainer}
        inputStyle={globalStyle.input}
        inputContainerStyle={globalStyle.innerContainer} //@ts-ignore
        leftIcon={leftIcon} //@ts-ignore
        rightIcon={rightIcon}
        placeholderTextColor={Theme.placeHolder}
      />
    </View>
  );
};

export default CustomInput;
