import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Navigation from 'navigation/Navigation';

import images from 'assets/images';

import styles from './styles';

function Splash() {
  useEffect(() => {
    checkIsLogin();
  });

  const splashScreenDuration = async() => {
    return new Promise((resolve) =>
      setTimeout(() => {resolve('result')}, 3000)
    );
  }

  const checkIsLogin = async() => {
    const timeout = await splashScreenDuration();
    const isLogin = await AsyncStorage.getItem("isLogin");

    if (timeout !== null) {
      if (isLogin === "true" && isLogin !== null) {
        Navigation.replace('NoteList');
      } else {
        Navigation.replace('Login');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images.logo}
        resizeMode='contain'
      />
    </View>
  );
}

export default Splash;