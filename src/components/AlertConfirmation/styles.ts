import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.blackTransparent,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute'
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: 'black'
  },
  content: {
    textAlign: 'center',
    marginBottom: 20
  },
  containerButton: {
    flexDirection: 'row'
  },
  buttonNegative: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.disabled
  },
  captionNegative: {
    color: 'white'
  },
  buttonPositive: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary
  },
  captionPositive: {
    color: 'white'
  },
  margin: {
    marginHorizontal: 5
  }
});

export default styles;