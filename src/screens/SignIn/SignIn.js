import {View, Image, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../../assets/images/Logo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';

// ? Component
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import SocialMediaButton from '../../components/SocialMediaButton';

// ? Env
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    console.log('onPressLogin');
    console.log(username, password);
    await axios
      .post(`http://10.153.243.42:1234/api/v1/auth/login`, {
        email: username,
        password: password,
      })
      .then(async res => {
        await AsyncStorage.setItem('token', res.data.data.token.access_token);
        await AsyncStorage.setItem('id', res.data.data.token.id.toString());
        navigation.navigate('Home');
      })
      .catch(err => Alert.alert('error', err));
  };

  const onPressForgot = () => {
    console.log('Forgot Password');
  };

  const checkLogin = async () => {
    await AsyncStorage.getItem('token', async (err, token) => {
      if (token) navigation.navigate('Home');
    });
  };

  useEffect(() => {
    checkLogin();
  }, [navigation]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secure
        />
        <CustomButton
          onPress={onPressLogin}
          text="Sign In"
          type="1"
          bgColor="#3871F3"
          fgColor="white"
        />
        <CustomButton onPress={onPressForgot} text="Forgot Password" type="2" />
        <SocialMediaButton />
        <CustomButton
          onPress={() => navigation.navigate('SignUp')}
          text="Don't have an account? Create one"
          type="1"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: wp(50),
    height: hp(25),
  },
});

export default SignIn;
