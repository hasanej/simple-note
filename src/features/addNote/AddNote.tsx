import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {useRealm} from '@realm/react';
import Realm from 'realm';

import * as Navigation from 'navigation/Navigation';

import {Button} from 'components/Button';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

function AddNote() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [validationError, setValidationError] = useState(false);

  const realm = useRealm();

  const handleBack = () => {
    Navigation.pop();
  }

  const validateForm = () => {
    if (noteTitle == "" || noteContent == "") {
      setValidationError(true);
    } else {
      setValidationError(false);
      const generateObjectId = new Realm.BSON.ObjectId();

      realm.write(() => {
        realm.create('Note', {
          _id: generateObjectId,
          title: noteTitle,
          content: noteContent
        });
      });

      Navigation.pop();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            style={styles.cta}
            source={images.left_arrow}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{strings.add_note}</Text>

        <View style={styles.cta} />
      </View>

      <View style={styles.containerNoteTitle}>
        <Text style={styles.noteTitle}>{strings.note_title}</Text>

        <TextInput
          onChangeText={(val) => setNoteTitle(val)}
          style={styles.noteTitleInput}
        />
      </View>

      <View style={styles.containerNoteTitle}>
        <Text style={styles.noteTitle}>{strings.note_content}</Text>

        <TextInput
          onChangeText={(val) => setNoteContent(val)}
          style={styles.noteContentInput}
          multiline={true}
        />
      </View>

      {
        validationError &&
          <View style={styles.containerError}>
            <Text style={styles.textError}>{strings.please_complete_the_form}</Text>
          </View>
      }

      <View style={styles.containerButtonSave}>
        <Button
          disabled={false}
          caption={strings.save}
          onPress={validateForm}
        />
      </View>
    </View>
  );
}

export default AddNote;