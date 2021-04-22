import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ProfileScreen, LoginScreen, WorkoutHistoryScreen } from './App/Containers';

describe('ProfileScreen', () => {
  it('LogOut', () => {
    const push = jest.fn();
    const { getByText } = render(<ProfileScreen navigation = {{ push }} />);
    fireEvent.press(getByText('LogOut'));
    expect(push).toHaveBeenCalledWith('LoginScreen');
  });

  it('ChangeTheme', () => {
    const push = jest.fn();
    const { getByText } = render(<ProfileScreen navigation = {{ push }} />);
    const { currentTheme } = { getByText('ProfileScreen.Theme') }
    fireEvent.press(getByText('ChangeTheme'));
    expect(push).toHaveBeenCalledWith('ProfileScreen.DarkMode', { currentTheme });
  });

  it('BarPress', () => {
    const push = jest.fn();
    const { getByText } = render(<ProfileScreen navigation = {{ push }} />);
    fireEvent.press(getByText('BarPress'));
    expect(push).toHaveBeenCalledWith('WorkoutHistoryScreen');
  });

});