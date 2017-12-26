import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { compose } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initial = {
		UI: {
			loggedIn: false,
			waitingForResponse: false,
			user: '',
			leaf:'OfficeLeaf'
		},
		BM: {
			oofolder:{
				driveId: '',
				driveName: 'book one',
				ootype: 'OOFolder',
				oofolders: [],
				oofiles: []
			}
		}
	};

const serverResponseReducer = (state, action) =>{
		state.UI.waitingForResponse=action.loggedIn;
		state.UI.waitingForResponse=false;
		return state;
}

const reducer = (state = initial, action) => {
	console.log(action);
	var newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'change_leaf':
			newState.UI.leaf=action.newLeaf;
			return newState;
		case 'Benutzer_einloggen':
			newState.UI.waitingForResponse=true;
			return newState;
		case 'Server_antwortet':
			serverResponseReducer(newState,action.serverAction);
			newState.UI.waitingForResponse=false;
			return newState;
		default:
			return newState;
	}
};
	
var reduxMiddleware;
if (window.__REDUX_DEVTOOLS_EXTENSION__){
	reduxMiddleware = compose(
		applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		);
} else reduxMiddleware = 	applyMiddleware(ReduxThunk);
		
let store = createStore(
		reducer,
		reduxMiddleware
		);
		
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

registerServiceWorker();

store.subscribe(() =>{
  console.log("Dom wird neugerendert:"+store.getState())
 ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
);
