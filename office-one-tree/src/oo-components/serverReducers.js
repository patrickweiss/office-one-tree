
// entspricht https://redux.js.org/advanced/async-actions  reducers.js --> ich benutze keine "combineReducers" im Moment nicht!!!!
// der Komplette neue State wird in einer Funktion generiert.


//import { combineReducers } from 'redux';
import {
  SERVER_AUFRUF,
  SERVER_ANTWORTET
} from './serverActions.js';



function serverReducer(newState, action){
    window.logger.debug("1. Antwort.functionName:" + newState.UI.waitingForResponse);
    switch (newState.UI.waitingForResponse) {
        case 'getOrCreateDriveData':
            newState.BM.serverState = JSON.parse(action.response);
            newState.UI.user = newState.BM.serverState.ooUser;
            newState.UI.leaf = "DatenArchivieren";
            newState.UI.waitingForResponse = false;
            return;
        case 'getNamedRangeData':
            newState.BM.ooAusgaben = JSON.parse(action.response);
            newState.UI.waitingForResponse = false;
            return;
        case 'addItemToTableBySpreadsheetIdAndNamedRange':
            newState.BM.ooNeueAusgaben = JSON.parse(action.response);
            newState.UI.waitingForResponse = false;
            return;
        default:
            return;
    }
}


export default serverReducer;