import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RegisterScreen, LoginScreen } from './App/Containers';

describe('RegisterScreen', () => {
  it('Register', () => {
    const push = jest.fn();
    const { getByText } = render(<RegisterScreen navigation = {{ push }} />);
    const { email, password } = { getByText('email'), getByText('password') }
    fireEvent.press(getByText('Register'), { email, password });
    expect(push).toHaveBeenCalledWith('LoginScreen');
  });
});