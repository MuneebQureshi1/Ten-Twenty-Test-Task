import {View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {Theme} from '../../constants/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loader from '../Loader/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyle} from '../../styles/globalStyles';

interface ScreenContainerProps {
  children: ReactNode;
  style?: ViewStyle | any;
  loading?: boolean;
  backgroundColor?: string;
  headerComponent?: ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  loading,
  backgroundColor = Theme.mainBackgroundColor,
  headerComponent,
}) => {
  return (
    <SafeAreaView
      style={[globalStyle.Flex1, !loading && style, {backgroundColor}]}>
      {/* Render the HeaderComponent if provided */}
      {headerComponent && <View>{headerComponent}</View>}

      <KeyboardAwareScrollView
        style={globalStyle.Flex1}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={!loading && style}
        contentInsetAdjustmentBehavior="automatic"
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
        {loading ? (
          <View style={globalStyle.loaderContainer}>
            <Loader />
          </View>
        ) : (
          children
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
