import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { compose } from 'redux'
import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import OfficeLeaf from './oo-components/OfficeLeaf.js'



class ObRoot extends OfficeLeaf {
  render(){
    return (
    <h2> ich bin ObRoot</h2>
    );
  }
}

var components = {
  "ObRoot": ObRoot,
  "OfficeLeaf": OfficeLeaf
};

class App extends Component {
  render() {
    var CurrentLeaf = components[store.getState().UI.leaf];
    return <CurrentLeaf size="MOBILE" />;
  }
}


console.log("dieser Code wurde ausgeführt")
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
				newState.UI.leaf=action.leaf;
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
store.subscribe(() =>
  console.log("Dom wird neugerendert:"+store.getState())
);



store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

export default App;
