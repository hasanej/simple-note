import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {
  title: String;
  content: String;
  positiveText: String;
  negativeText: String;
  onPressPositive?: () => void;
  onPressNegative?: () => void;
}

const AlertConfirmation = (props: Props) => {
  const {
    title, content, positiveText, negativeText, onPressPositive, onPressNegative
  } = props;

  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={onPressNegative}
            style={styles.buttonNegative}
          >
            <Text style={styles.captionNegative}>{negativeText}</Text>
          </TouchableOpacity>

          <View style={styles.margin} />

          <TouchableOpacity
            onPress={onPressPositive}
            style={styles.buttonPositive}
          >
            <Text style={styles.captionPositive}>{positiveText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AlertConfirmation;