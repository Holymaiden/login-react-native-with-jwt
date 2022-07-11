import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const index = ({value, setValue, placeholder, secure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp('80%'),
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: wp(2),

    paddingHorizontal: hp(2),
    marginVertical: wp(2),
  },
  input: {},
});

export default index;
