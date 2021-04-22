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

waitFor('LoginScreen', { 'email': 'abc@gmail.com', 'password': 'abc123' });
waitFor('LoginScreen', { 'email': 'thanhdat312@gmail.com', 'password': '12345678' });
waitFor('LoginScreen', { 'email': 'ducduy194@gmail.com', 'password': 'pducduy194' });
waitFor('LoginScreen', { 'email': 'nngocanhv@gmail.com', 'password': 'nnav@55' });
waitFor('LoginScreen', { 'email': 'nhdat2@gmail.com', 'password': 'nhdat123' });
waitFor('LoginScreen', { 'email': 'aaaaaaaaa@gmail.com', 'password': 'aabbaabb' });
waitFor('LoginScreen', { 'email': 'dreamow@gmail.com', 'password': 'dreamow@1999' });
waitFor('LoginScreen', { 'email': 'google@gmail.com', 'password': 'gooooooogle' });
waitFor('LoginScreen', { 'email': 'facebook@gmail.com', 'password': 'markzuckerberg' });
waitFor('LoginScreen', { 'email': 'gmail@gmail.com', 'password': 'gmaillll' });
