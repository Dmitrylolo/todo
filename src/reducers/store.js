import { createStore } from 'redux';
import { reducer } from './reducers';

export const store = createStore(
	reducer, 
	/* eslint-disable */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
	/* eslint-enable */ 
	);
