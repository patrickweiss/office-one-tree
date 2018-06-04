function serverAntwortReducer(newState, action) {
    if (newState === undefined) return;
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

export default serverAntwortReducer;