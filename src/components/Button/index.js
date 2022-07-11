import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const index = ({onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
        styles[`container_${type}`],
      ]}>
      <Text style={[styles.text, fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    padding: hp(1.5),

    borderRadius: wp(2),
    alignItems: 'center',
  },
  container_1: {
    marginVertical: wp(2),
  },
  container_2: {
    marginVertical: wp(1),
  },
  text: {
    fontWeight: 'bold',
  },
});

export default index;
