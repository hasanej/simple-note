import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cta: {
    width: 30,
    height: 30
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.2
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20
  },
  containerNoteTitle: {
    padding: 10
  },
  noteTitle: {
    fontSize: 16,
    marginBottom: 5
  },
  noteTitleInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  noteContentInput: {
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  containerError: {
    marginHorizontal: 10,
    backgroundColor: colors.error,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textError: {
    color: 'white',
    fontSize: 16
  },
  containerButtonEdit: {
    marginHorizontal: 10,
    marginBottom: 10
  },
  containerViewNote: {
    flex: 1
  },
  selectedNoteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  selectedNoteContent: {
    fontSize: 16,
    marginHorizontal: 10
  },
  containerButtonIsEditing: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    flexDirection: 'row'
  },
  containerButton: {
    flex: 1
  },
  buttonSpace: {
    width: 10
  },
  buttonCancel: {
    backgroundColor: colors.disabled,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCancelText: {
    fontSize: 14,
    color: 'white'
  }
});

export default styles;