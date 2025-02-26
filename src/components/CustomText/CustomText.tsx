// components/CustomText.js
import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface CustomTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle> | any;
  onPress?: () => void;
  numberOfLines?: number | undefined; // Optional prop to specify max lines
}

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  children,
  onPress,
  numberOfLines, // No default value, making it optional
  ...props
}) => {
  return (
    <Text
      onPress={onPress}
      style={[style]}
      numberOfLines={numberOfLines} // Set number of lines if provided
      {...props}
    >
      {children}
    </Text>
  );
};
