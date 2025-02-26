import {View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {Theme} from '../../constants/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loader from '../Loader/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {SvgXml} from 'react-native-svg';
// import {svg} from '../../constants/svg';
// import {CustomText} from '../CustomText/CustomText';
// import {useNavigation, useNavigationState} from '@react-navigation/native';
import {globalStyle} from '../../styles/globalStyles';

interface ScreenContainerProps {
  children: ReactNode;
  style?: ViewStyle | any;
  loading?: boolean;
  backgroundColor?: string;
  HeaderLabel?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  loading,
  backgroundColor = Theme.mainBackgroundColor,
}) => {
  // const navigation = useNavigation<any>();
  // const routes = useNavigationState(state => state.routes);
  // const currentScreen = routes[routes.length - 1].name;
  // const specificScreens = ['WatchScreen'];
  return (
    <SafeAreaView
      style={[
        globalStyle.Flex1,
        !loading && style,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
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
