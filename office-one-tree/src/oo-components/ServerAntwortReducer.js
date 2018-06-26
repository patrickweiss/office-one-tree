function serverAntwortReducer(newState, action) {
    if (newState === undefined) return;
    var serverAntwort = JSON.parse(action.response);
    window.logger.debug("1. serverAntwort:" + action.response);
    switch (serverAntwort.serverFunction) {
        case 'getOrCreateDriveData':
            newState.BM.serverState =serverAntwort
            newState.UI.user = newState.BM.serverState.ooUser;
            newState.UI.leaf = "DatenArchivieren";
            newState.UI.waitingForResponse = false;
            return;
        case 'getNamedRangeData':
            newState.BM[serverAntwort.rangeName] = serverAntwort.namedRangeData;
            newState.UI.waitingForResponse = false;
            return;
        case 'addItemToTableBySpreadsheetIdAndNamedRange':
            newState.BM.ooNeueAusgaben = serverAntwort;
            newState.UI.waitingForResponse = false;
            return;
        case 'getUserEmail':
            newState.UI.user = serverAntwort.ooUser;
            newState.UI.waitingForResponse = false;
            return;
        case 'getOrCreateSelbstaendigMachen':
            newState.UI.waitingForResponse = false;
            newState.BM.ooRootFolderId = serverAntwort.ooRootFolderId;
            newState.BM.ooselbstaendigMachenFolderId = serverAntwort.ooselbstaendigMachenFolderId;
            delete newState.UI.functionWaitingForSignIn;
            return;

        default:
            return;
    }
}

export default serverAntwortReducer;