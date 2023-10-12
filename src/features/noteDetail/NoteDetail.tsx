import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {useRealm, useObject} from '@realm/react';

import * as Navigation from 'navigation/Navigation';

import {Button} from 'components/Button';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

import {Note} from 'db/Note';

function NoteDetail(props) {
  const realm = useRealm();

  const _id = props.route.params.id;
  const selectedNote = useObject(Note, _id);

  const [noteTitle, setNoteTitle] = useState(selectedNote.title);
  const [noteContent, setNoteContent] = useState(selectedNote.content);
  const [validationError, setValidationError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleBack = () => {
    Navigation.pop();
  }

  const validateForm = () => {
    if (noteTitle == "" || noteContent == "") {
      setValidationError(true);
    } else {
      setValidationError(false);

      realm.write(() => {
        selectedNote.title! = noteTitle;
        selectedNote.content! = noteContent;
      });

      setIsEditing(false);
    }
  }

  const viewNote = () => {
    return (
      <View style={styles.containerViewNote}>
        <Text style={styles.selectedNoteTitle}>{selectedNote.title}</Text>
        <Text style={styles.selectedNoteContent}>{selectedNote.content}</Text>

        <View style={styles.containerButtonEdit}>
          <Button
            disabled={false}
            caption={strings.edit}
            onPress={() => setIsEditing(true)}
          />
        </View>
      </View>
    )
  }

  const editNote = () => {
    return(
      <>
        <View style={styles.containerNoteTitle}>
          <Text style={styles.noteTitle}>{strings.note_title}</Text>

          <TextInput
            onChangeText={(val) => setNoteTitle(val)}
            style={styles.noteTitleInput}
            value={noteTitle}
          />
        </View>

        <View style={styles.containerNoteTitle}>
          <Text style={styles.noteTitle}>{strings.note_content}</Text>

          <TextInput
            onChangeText={(val) => setNoteContent(val)}
            style={styles.noteContentInput}
            multiline={true}
            value={noteContent}
          />
        </View>

        {
          validationError &&
            <View style={styles.containerError}>
              <Text style={styles.textError}>{strings.please_complete_the_form}</Text>
            </View>
        }

        <View style={styles.containerButtonIsEditing}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => setIsEditing(false)}
            >
              <Text style={styles.buttonCancelText}>{strings.cancel}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonSpace} />

          <View style={styles.containerButton}>
            <Button
              disabled={false}
              caption={strings.save}
              onPress={validateForm}
            />
          </View>
        </View>
      </>
    )
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

        <Text style={styles.headerTitle}>{strings.note_detail}</Text>

        <View style={styles.cta} />
      </View>

      {isEditing ? editNote() : viewNote()}
    </View>
  );
}

export default NoteDetail;