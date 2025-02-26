import React from "react";
import { View, ActivityIndicator, ViewStyle } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { Theme } from "../../constants/Theme";

// Define the type for props (if any)
interface LoaderProps {
  message?: string; // Optional message to display with the loader
  style?: ViewStyle | any;
  color?: string;
  size?: number | "large" | "small" | undefined;
}

const Loader: React.FC<LoaderProps> = ({
  message,
  style,
  color = Theme.bottomBarActiveText,
  size = "large",
}) => {
  return (
    <View>
      <ActivityIndicator size={size} color={color} style={style} />
      {message && <CustomText>{message}</CustomText>}
    </View>
  );
};

export default Loader;
