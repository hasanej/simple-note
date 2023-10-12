import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {
  caption: String;
  disabled: boolean;
  onPress?: () => void;
}

const Button = (props: Props) => {
  const {caption, disabled, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.container, disabled ? styles.bgDisabled : styles.bg]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  );
}

export default Button;