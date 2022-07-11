import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomButton from '../Button';

const SocialMediaButton = () => {
  const onPressFacebook = () => {
    console.log('Facebook');
  };

  const onPressGoogle = () => {
    console.log('Google');
  };

  return (
    <View style={styles.root}>
      <CustomButton
        onPress={onPressFacebook}
        text="Sign In with Facebook"
        type="2"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onPressGoogle}
        text="Sign In with Google"
        type="2"
        bgColor="#FAE9EA"
        fgColor="#DD4044"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: hp(1),
  },
});

export default SocialMediaButton;
