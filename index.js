import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './src/reducers/store';

const Main = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent('todo2', () => Main);
