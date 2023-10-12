import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigation = React.createRef();

export function navigate(route, params) {
  navigation.current?.navigate(route, params);
}

export function replace(route, params) {
  navigation.current?.dispatch(StackActions.replace(route, params));
}

export function pop() {
  navigation.current?.dispatch(StackActions.pop());
}

export function reset(route) {
  navigation.current?.dispatch(CommonActions.reset({
    index: 0,
    routes: [{ name: route }]
  }));
}