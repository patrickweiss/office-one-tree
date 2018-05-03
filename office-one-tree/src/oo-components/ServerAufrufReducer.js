function serverAufrufReducer(newState,action){
    if (newState===undefined)return;
    newState.UI.leaf="OrdnerEinrichten";
}

export default serverAufrufReducer();