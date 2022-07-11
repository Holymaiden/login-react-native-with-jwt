import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// ? Env
import {API_URL} from '@env';

const Home = ({navigation}) => {
  const [user, setUser] = useState([]);

  const getJwtToken = async () => {
    await AsyncStorage.getItem('token', async (err, token) => {
      if (token)
        await AsyncStorage.getItem('id', async (err, id) => {
          if (id) {
            console.log(id);
            await axios
              .get(`http://10.153.243.42:1234/api/v1/user/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(res => {
                setUser(res.data.data);
              })
              .catch(err => console.log(err));
          }
        });
      else navigation.navigate('SignIn');
    });
  };

  useEffect(() => {
    getJwtToken();
  }, []);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default Home;
