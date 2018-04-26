import { combineReducers } from 'redux';

export const CREATE_TODO = 'create_todo';

const user = (state = {}, action) => {
	return state;
};

const todos = (state = [], action) => {
	switch (action.type) {
		case CREATE_TODO:
			return [
				action.payload,
				...state
			];
		default:
			return state;
	}
};

export const reducer = combineReducers({ todos, user });
