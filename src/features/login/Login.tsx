import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import * as Navigation from 'navigation/Navigation';
import {setIsLogin, saveUserData} from 'utils/AsyncStorage';

import {Button} from 'components/Button';
import {CustomTextInput} from 'components/CustomTextInput';
import {PasswordInput} from 'components/PasswordInput';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

import {useLoginMutation} from 'app/api/LoginApi';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [login, {isLoading: isLoadingLogin, isSuccess, data, isError, error}] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      setIsLogin("true").then(() => {
        const userData = {
          name: email.split('.')[0],
          email: email,
          token: data.token
        }

        console.log(userData);

        saveUserData(userData).then(() => {
          Navigation.replace('NoteList');
        });
      });
    }
  });

  const validateForm = () => {
    if (email == "" && password == "") {
      setErrorEmail(true);
      setErrorPassword(true);
    } else {
      if (email == "") {
        setErrorEmail(true);
        setErrorPassword(false);
      } else if (password == "") {
        setErrorEmail(false);
        setErrorPassword(true);
      } else {
        setErrorEmail(false);
        setErrorPassword(false);

        onLogin();
      }
    }
  }

  const onLogin = () => {
    login({email, password});
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={images.logo}
        resizeMode='contain'
      />

      <Text style={styles.welcomeText}>{strings.welcome}</Text>

      <CustomTextInput
        onChangeText={(email) => setEmail(email)}
        placeholder={strings.email}
        isError={errorEmail}
        errorMessage={strings.required_field}
      />

      <PasswordInput
        onChangeText={(password) => setPassword(password)}
        placeholder={strings.password}
        isError={errorPassword}
        errorMessage={strings.required_field}
      />

      {
        (isError || data?.code == 1) &&
          <View style={styles.containerError}>
            <Text style={styles.textError}>
              {isError ? error?.data.error : data?.message}
            </Text>
          </View>
      }

      <Button
        testID={'loginButton'}
        disabled={isLoadingLogin}
        caption={isLoadingLogin ? strings.please_wait : strings.login}
        onPress={validateForm}
      />
    </View>
  );
}

export default Login;