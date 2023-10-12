import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createRealmContext, RealmProvider} from '@realm/react';

import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import NavigationContainer from 'navigation/NavigationContainer';
import {store} from 'app/store';

import {realmConfig} from 'db';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const {RealmProvider, useRealm, useObject, useQuery} = createRealmContext(realmConfig);

  return (
    <Provider store={store}>
      <SafeAreaView style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
      }}>
        <RealmProvider schema={realmConfig}>
          <NavigationContainer />
        </RealmProvider>
      </SafeAreaView>
    </Provider>
  );
}

export default App;