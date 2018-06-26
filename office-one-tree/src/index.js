/*global gapi*/

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
import './oo-components/tableFilter.js';
import {serverAufrufen} from './oo-components/serverActions.js';


import Logger from './oo-components/Logger.js';
 

/* todo: https://www.npmjs.com/package/accounting-js
https://www.npmjs.com/package/compress.js
*/

window.logger = new Logger("debug");
console.log(window.logger);
window.logger.debug("hallo");

var initial = {
	UI: {
		leaf: 'OfficeOneTeam',
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
		case 'delete_userid':
			newState.UI.user="";
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
		case 'function_waiting_for_signin':
			newState.UI.functionWaitingForSignIn = action.functionWaitingForSignIn;
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


handleClientLoad();



/**************************************** hier kommt jetzt erst mal der Google Kram, kann man hinterher refactorn
 * */


// Client ID and API key from the Developer Console
var CLIENT_ID = "231574892308-jrng78q9behcs4lbsl85pu0jugqb6vc6.apps.googleusercontent.com";
var API_KEY = "AIzaSyBAh6zYniTB-LOJssXydgmx621-CoRM-Xw";


// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/script.projects https://mail.google.com/ https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/script.container.ui https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.email';
console.log("3. Initialisierung der Google API Konfiguration");

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  window.logger.debug("handleClientLoad");
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  window.logger.debug("initClient");
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function() {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    window.accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
	window.logger.debug("UpdateSigninStatus");
	window.store.dispatch(updateSigninStatusActionCreator(isSignedIn));
}

function updateSigninStatusActionCreator(isSignedIn) {
    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        window.logger.debug("1. belegBuchenActionCreator.dispatch --> Action vor dem Serveraufruf");
        dispatch({
            type: 'update_signin_status',
            isSignedIn: isSignedIn
        });
        if (isSignedIn){
        	dispatch(serverAufrufen({functionName: "getUserEmail"}));
       	
        	if (!window.store.getState().BM.ooselbstaendigMachenFolderId)window.store.dispatch(serverAufrufen({functionName: 'getOrCreateSelbstaendigMachen'}));
        }
        else
         dispatch({
            type: 'delete_userid'
        });
        
    };
}
