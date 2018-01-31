import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { compose } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

/* todo: https://www.npmjs.com/package/accounting-js
https://www.npmjs.com/package/compress.js
*/

const initial = {
		UI: {
			loggedIn: false,
			waitingForResponse: false,
			user: '',
			leaf:'ObRoot'
		},
		BM: {
			ooBooks:{
				geschaeftsjahrVon:new Date("Jan 01, 2018"),
				geschaeftsjahrBis:new Date("Dec 31, 2018")
			},
			oofolder:{
				driveId: '',
				driveName: 'book 2018',
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
		case 'change_Buchungsperiode':
			newState.UI.buchungsperiode=action.newBuchungsperiode;
			newState.UI.leaf="ObRoot";
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
		
window.store = createStore(
		reducer,
		reduxMiddleware
		);
		
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();

window.store.subscribe(() =>{
  console.log("Dom wird neugerendert");
  ReactDOM.render(<App/>, document.getElementById('root'));
}
);
