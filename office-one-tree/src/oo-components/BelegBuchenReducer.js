function belegBuchenReducer(newState, action) {
    newState.BM.speichernAntwort = JSON.parse(action.serverResponse);
    
    newState.BM.ooAusgaben[1][0]=newState.BM.speichernAntwort.id;
    
    newState.UI.betrag = undefined;
    newState.UI.konto = undefined;
    newState.UI.content = undefined;
    newState.UI.betrag = undefined;
    newState.UI.belegPhoto = undefined;
    
   // window.callScriptFunction("addItemToTableBySpreadsheetIdAndNamedRange", [newState.BM.ooAusgaben[1],window.store.getState().BM.serverState.ooAusgaben.spreadsheetId, "AusgabenD"]);
  
    return newState;
}

export default belegBuchenReducer;