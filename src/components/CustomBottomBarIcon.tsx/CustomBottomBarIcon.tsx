import React from 'react';
import {View, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';

// Define the types for the props
interface CustomTabBarIconProps {
  focused: boolean;
  selectedIcon: string; // SVG in XML format
  unselectedIcon: string; // SVG in XML format
  style?: ViewStyle; // Optional style prop to allow customization if needed
}

const CustomTabBarIcon: React.FC<CustomTabBarIconProps> = ({
  focused,
  selectedIcon,
  unselectedIcon,
  style,
}) => {
  return (
    <View style={[style]}>
      <SvgXml xml={focused ? selectedIcon : unselectedIcon} />
    </View>
  );
};

export default CustomTabBarIcon;
