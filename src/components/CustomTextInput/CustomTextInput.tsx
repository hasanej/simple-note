import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';

type Props = {
  placeholder: String;
  isError: boolean;
  errorMessage: String;
  autoCapitalize: String;
  onChangeText?: () => void;
}

const CustomTextInput = (props: Props) => {
  const {
    placeholder, isError, errorMessage, autoCapitalize, onChangeText
  } = props;

  return (
    <>
      {
        isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
      }

      <View style={[
        styles.container,
        isError ? styles.borderError : styles.border
      ]}>
        <TextInput
          style={styles.caption}
          placeholder={placeholder}
          onChangeText={(val) => onChangeText(val)}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </>
  );
}

export default CustomTextInput;