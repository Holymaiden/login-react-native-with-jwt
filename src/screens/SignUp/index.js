import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import SocialMediaButton from '../../components/SocialMediaButton';

import Logo from '../../../assets/images/Logo.png';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const onPressCreate = () => {
    console.log('Buat');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secure
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secure
        />
        <Text style={styles.text}>
          By Registering you confirm that you accept out{' '}
          <Text style={styles.link} onPress={() => console.log('Term of User')}>
            Terms of User
          </Text>{' '}
          and
          <Text
            style={styles.link}
            onPress={() => console.log('Privacy Policy')}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Register"
          type="1"
          bgColor="#3871F3"
          fgColor="white"
          onPress={onPressCreate}
        />
        <SocialMediaButton />
        <CustomButton
          text="Have an account? Sign In"
          type="1"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: wp(50),
    height: hp(25),
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#3871F3',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: wp(0.5),
    marginHorizontal: hp(4),
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUp;
