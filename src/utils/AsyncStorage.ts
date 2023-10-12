import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setIsLogin(isLogin) {
  await AsyncStorage.setItem("isLogin", isLogin);
}

export async function saveUserData(userData) {
  await AsyncStorage.setItem("name", userData.name);
  await AsyncStorage.setItem("email", userData.email);
  await AsyncStorage.setItem("token", userData.token);
}