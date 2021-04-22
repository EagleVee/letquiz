/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeScreen } from '../Components/HomeScreen';

jest.mock('react-native-datepicker');

describe('HomeScreen Test', () => {

  let homeScreenMock = {
    homeScreen: 'test',
  };
  const inst = renderer
  .create(<HomeScreen homeScreen={homeScreenMock} />)
  .getInstance();  let total = 1 + 1

  console.log(inst) // shows all
  console.log(inst.state) // shows all states
  console.log(inst.onChangeValue('params')) // returns what the function should

inst.setState({ data: 'newData' })

  it('should run test flawlessly', () => {
      expect(total).toBe(2)
  })

  it('should fail the test', () => {
      expect(total).toBe(2)
  })
})