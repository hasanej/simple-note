import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cta: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.2
  },
  containerWelcome: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    textTransform: 'capitalize'
  },
  email: {
    textAlign: 'right'
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10
  },
  noteTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  noteContent: {
    fontSize: 14
  },
  containerEmptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageEmpty: {
    width: 100,
    height: 100
  },
  emptyListText: {
    marginTop: 5,
    fontSize: 16
  },
  delete: {
    width: 30,
    height: 30
  }
});

export default styles;