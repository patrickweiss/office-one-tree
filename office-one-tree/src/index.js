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
import Logger from './oo-components/Logger.js';
//import serverAufrufReducer from'./oo-components/ServerAufrufReducer.js';
 

/* todo: https://www.npmjs.com/package/accounting-js
https://www.npmjs.com/package/compress.js
*/

window.logger = new Logger("debug");
console.log(window.logger);
window.logger.debug("hallo");

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
	window.logger.debug("1. State aktualisieren---------------------------------------------");
	window.logger.debug("1. ACTION:"+action.type);

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
		case 'Server_Aufruf':
			//serverAufrufReducer(newState,action);
			newState.UI.leaf="OrdnerEinrichten";
			return newState;
		case 'Server_antwortet':
			newState.BM.rootFolder=action.response;
			newState.UI.leaf="DatenArchivieren";
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
} else reduxMiddleware = applyMiddleware(ReduxThunk);
		
window.store = createStore(
		reducer,
		reduxMiddleware
		);
		
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
window.store.subscribe(() => {
    window.logger.debug("2. vor render ---------------------------------------------");
	ReactDOM.render(<App/>, document.getElementById('root'));
    window.logger.debug("2. nach render ---------------------------------------------");
});
