import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigation} from 'navigation/Navigation';

import {Login} from 'features/login';
import {NoteList} from 'features/noteList';
import {AddNote} from 'features/addNote';
import {NoteDetail} from 'features/noteDetail';
import {Splash} from 'features/splash';

const Stack = createStackNavigator();

const navigationContainer = () => {
  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen 
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen 
          name="NoteList"
          options={{headerShown: false}}
          component={NoteList}
        />
        <Stack.Screen 
          name="AddNote"
          options={{headerShown: false}}
          component={AddNote}
        />
        <Stack.Screen 
          name="NoteDetail"
          options={{headerShown: false}}
          component={NoteDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

export default navigationContainer;
