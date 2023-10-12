import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    backgroundColor: colors.colorPrimary
  },
  bgDisabled: {
    backgroundColor: colors.borderInput
  },
  caption: {
    fontSize: 14,
    color: 'white'
  }
});

export default styles;