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
import photoMachenReducer from'./oo-components/PhotoMachenReducer.js';
import changeLeafContentReducer from'./oo-components/ChangeLeafContentReducer.js';
import belegSpeichernReducer from'./oo-components/BelegSpeichernReducer.js';
import serverAufrufReducer from'./oo-components/ServerAufrufReducer.js';
import serverAntwortReducer from'./oo-components/ServerAntwortReducer.js';
import belegBuchenReducer from'./oo-components/BelegBuchenReducer.js';



import './oo-components/accounting.js';
import './oo-components/callScriptFunction.js';
import './oo-components/tableFilter.js';


import Logger from './oo-components/Logger.js';
 

/* todo: https://www.npmjs.com/package/accounting-js
https://www.npmjs.com/package/compress.js
*/

window.logger = new Logger("debug");
console.log(window.logger);
window.logger.debug("hallo");

var initial = {
	UI: {
		leaf: 'ElsterInEinfachUndSchnell',
		renderHelpOf: '',
		counter:1,
		loggedIn: false,
		waitingForResponse: false,
		user: '',
		gegenkonto: 'bar'
	},
	BM: {
		ooKonto: ['Bäckerei', 'Metzgerei', 'Getränke'],
		ooMwSt:['0%','7%','19%'],
		ooGegenkonto:['bar','auf Rechnung','Bewirtungsbeleg']
	}
};




const reducer = (state = initial, action) => {
	window.logger.debug("1. State aktualisieren---------------------------------------------");
	window.logger.debug("1. ACTION:"+action.type);

	var newState = JSON.parse(JSON.stringify(state));
	newState.UI.counter=state.UI.counter+1;
	switch (action.type) {
		case 'change_leaf':
			newState.UI.leaf=action.newLeaf;
			if (action.newLeaf==="BuchungsperiodeWaehlen")delete newState.UI.buchungsperiode;
			return newState;
		case 'change_leaf_content':
			changeLeafContentReducer(newState,action);
			//newState.UI.content=action.content;
			return newState;
		case 'type_pressed':
			betragEingebenReducer(newState,action);
			return newState;
		case 'konto_selected':
			kontoEingebenReducer(newState,action);
			return newState;
		case 'mwst_selected':
			newState.UI.MwSt=action.mwst;
			return newState;
		case 'gegenkonto_selected':
			newState.UI.gegenkonto=action.gegenkonto;
			return newState;
		case 'photo_gemacht':
			photoMachenReducer(newState,action);
			return newState;
		case 'beleg_speichern':
			belegSpeichernReducer(newState,action);
			return newState;
		case 'change_Buchungsperiode':
			newState.UI.buchungsperiode=action.newBuchungsperiode;
			newState.UI.leaf="ObRoot";
			return newState;
		case 'update_signin_status':
			newState.UI.loggedIn=action.isSignedIn;
			return newState;
		case 'Server_Aufruf':
			serverAufrufReducer(newState,action);
			return newState;
		case 'Server_antwortet':
			serverAntwortReducer(newState,action);
			return newState;
		case 'beleg_buchen':
			belegBuchenReducer(newState,action);
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
    window.localStorage.setItem("ooState",JSON.stringify(window.store.getState()));
});
