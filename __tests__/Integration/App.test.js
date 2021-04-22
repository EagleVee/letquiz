import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { LoginScreen, HomeScreen } from './App/Containers';

describe('LoginScreen', () => {
  it('Login', () => {
    const push = jest.fn();
    const { getByText } = render(<LoginScreen navigation = {{ push }} />);
    const { email, password } = { getByText('email'), getByText('password') }
    fireEvent.press(getByText('Login'), { email, password });
    expect(push).toHaveBeenCalledWith('HomeScreen');
  });
});