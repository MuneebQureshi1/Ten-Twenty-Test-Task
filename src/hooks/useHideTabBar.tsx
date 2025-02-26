import {useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {globalStyle} from '../styles/globalStyles';

// Define the type for the hook props
type UseHideTabBarProps = {
  navigation: NavigationProp<ParamListBase>;
};

export const useHideTabBar = ({navigation}: UseHideTabBarProps) => {
  useEffect(() => {
    // Hide the tab bar on this screen
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });

    // Reset the tab bar visibility when leaving the screen
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: globalStyle.bottomBarStlye,
      });
    };
  }, [navigation]);
};
