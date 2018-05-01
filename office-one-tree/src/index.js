import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { compose } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import betragEingebenReducer from'./oo-components/BetragEingebenReducer.js';
import kontoEingebenReducer from'./oo-components/KontoEingebenReducer.js';
 

/* todo: https://www.npmjs.com/package/accounting-js
https://www.npmjs.com/package/compress.js
*/

const initial = {
	UI: {
		loggedIn: false,
		waitingForResponse: false,
		user: '',
		leaf: 'ObRoot'
	},
	BM: {
		ooKonto: ['Bäckerei', 'Metzgerei', 'Getränke']
	}
};


const reducer = (state = initial, action) => {
	console.log(action);
	var newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'change_leaf':
			newState.UI.leaf=action.newLeaf;
			if (action.newLeaf==="BuchungsperiodeWaehlen")delete newState.UI.buchungsperiode;
			return newState;
		case 'change_leaf_content':
			newState.UI.content=action.content;
			return newState;
		case 'type_pressed':
			betragEingebenReducer(newState,action);
			return newState;
		case 'konto_selected':
			kontoEingebenReducer(newState,action);
			return newState;
		case 'change_Buchungsperiode':
			newState.UI.buchungsperiode=action.newBuchungsperiode;
			newState.UI.leaf="ObRoot";
			return newState;
		case 'update_signin_status':
			newState.UI.loggedIn=action.isSignedIn;
			return newState;
		case 'Server_antwortet':
			newState.BM.rootFolder=action.response;
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
