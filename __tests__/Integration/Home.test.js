import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, SearchScreen } from './App/Containers';

describe('HomeScreen', () => {
  it('Search', () => {
    const push = jest.fn();
    const { getByText } = render(<HomeScreen navigation = {{ push }} />);
    const { txtSearch } = { getByText('txtSearch') }
    fireEvent.press(getByText('Search'), { txtSearch });
    expect(push).toHaveBeenCalledWith('SearchScreen');
  });
});