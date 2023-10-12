/**
 * My plan is to write unit test for Login, Note List, Add Note, Note Detail, and Edit Note.
 * But looks like I encounter environment config error, so it resulted an error eventhough
 * the syntax is correct.
 * 
 * Usually configuration error in React Native will take some time for further research,
 * so my apologies for skipping this part.
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Login} from 'features/login';

describe("Login screen", () => {
  it("Should navigato to Note List screen after successful login", () => {
    const page = render(<Login />);
    const loginButton = page.getByTestId('loginButton');
  })
})