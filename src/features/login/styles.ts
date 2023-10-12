import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 50
  },
  containerError: {
    backgroundColor: colors.error,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textError: {
    color: 'white',
    fontSize: 14
  },
  iconBiometric: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});

export default styles;