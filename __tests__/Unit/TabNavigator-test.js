/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

jest.unmock('../App/Navigation/TabNavigator');

import '../testutils/jest';
import TabNavigator from '../App/Navigation/TabNavigator';

describe('TabNavigator', () => {
  let component;
  let textInput;
  const defaultState = {text: ''};

  test('renders correctly', () => {
    const snapshot = renderer.create(<TabNavigator />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<TabNavigator />);
    textInput = component.find('TextInput');
  });

  it('has default state', () => {
    expect(component.state()).toEqual(defaultState);
  });

  it('renders welcome text', () => {
    const expectedText = 'Welcome to TabNavigator testing';
    const text = component.find('Text').children().text();
    expect(text).toEqual(expectedText);
  });

  it('renders input field with placeholder', () => {
    const expectedPlaceholder = 'TabNavigator testing';
    expect(textInput.length).toBe(1);
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder);
  });

  describe('when text changes', () => {
    const newTextValue = 'random string ui testing TabNavigator';
    beforeEach(() => {
      textInput.simulate('changeText', newTextValue);
    });

    it('updates component state', () => {
      expect(component.state().text).toEqual(newTextValue);
    });

    it('passes text from state to TabNavigator', () => {
      const childComponent = component.find(TabNavigator);
      expect(childComponent.props().text).toEqual(newTextValue)
    });

    describe('when clearText callback is called', () => {
      beforeEach(() => {
        const childComponent = component.find(TabNavigator);
        childComponent.simulate('clear');
      });

      it('resets state', () => {
        expect(component.state()).toEqual(defaultState);
      });
    });
  });
});