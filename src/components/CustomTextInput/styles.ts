import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  caption: {
    fontSize: 14
  },
  errorMessage: {
    fontSize: 14,
    color: colors.error
  },
  border: {
    borderColor: colors.borderInput
  },
  borderError: {
    borderColor: colors.error
  }
});

export default styles;