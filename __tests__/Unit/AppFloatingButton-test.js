/**
 * @format
 */

import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import {AppFloatingButton} from 'App..//Components/AppFloatingButton';

function MyComponent() {
  return (
	<div>
		<SubComponent foo="test" />
		<p className="AppFloatingButton">Hello tester</p>
	</div>
  )
}

function SubComponent() {
  return (
    <p className="sub">Test button</p>
  );
}


const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;

expect(testInstance.findByType(SubComponent).props.foo).toBe('test');
expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Test button']);