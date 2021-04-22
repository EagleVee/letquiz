import mockStore from 'redux-mock-store';
import { LOGOUT } from '../actions/logout';
import User from '../reducers/user';
import { testUser } from 'jest/mock-objects';

describe('Testing the sign in authentication', () => {
	const store = Login();

	it('test login', async () => {
		await store.dispatch(authenticateUser('thanhdatba12@gmail.com', 'password123'));
		expect(store.getActions()).toMatchSnapshot();
	});
});

describe('Testing reducers after user LOG OUT', () => {
	it('test logout', () => {
	  expect(user(testUser, { type: LOGOUT })).toMatchSnapshot();
	});
});