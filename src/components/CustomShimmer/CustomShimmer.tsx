import React, {useRef, useEffect} from 'react';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleProp, ViewStyle} from 'react-native';

interface CustomShimmerProps {
  style?: StyleProp<ViewStyle>;
  shimmerColors?: string[];
}

const CustomShimmer: React.FC<CustomShimmerProps> = ({
  style,
  shimmerColors = ['#cccccc', '#DDDDDD', '#cccccc'],
}) => {
  const shimmerRef = useRef<ShimmerPlaceholder>(null);

  useEffect(() => {
    const startAnimation = async () => {
      shimmerRef.current?.startShimmer(); // Start shimmer effect
    };
    startAnimation();
  }, []);
  return (
    <View>
      <ShimmerPlaceholder
        ref={shimmerRef}
        LinearGradient={LinearGradient}
        shimmerColors={shimmerColors}
        style={style}
      />
    </View>
  );
};

export default CustomShimmer;
