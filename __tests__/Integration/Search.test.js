import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SearchScreen, HomeScreen } from './App/Containers';

describe('SearchScreen', () => {
  it('Back', () => {
    const push = jest.fn();
    const { getByText } = render(<SearchScreen navigation = {{ push }} />);
    fireEvent.press(getByText('Back'));
    expect(push).toHaveBeenCalledWith('HomeScreen');
  });
});