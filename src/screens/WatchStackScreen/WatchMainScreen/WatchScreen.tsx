import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenConatiner';
import {CustomText} from '../../../components/CustomText/CustomText';
import {TextList} from '../../../constants/TextList';
import {horizontalResponsive} from '../../../utils/responsiveControlFunctions';
import Fonts from '../../../constants/FontsFamily';
import {Theme} from '../../../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WatchScreen = () => {
  return (
    <ScreenContainer>
      {/* Header */}
      <View>
        <CustomText
          style={{
            fontSize: horizontalResponsive(16),
            fontFamily: Fonts.Poppins500,
            color: Theme.TextColor,
          }}>
          {TextList.watch}
        </CustomText>
        <AntDesign name={'search1'} size={30} color={Theme.black} />
      </View>
    </ScreenContainer>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({});
