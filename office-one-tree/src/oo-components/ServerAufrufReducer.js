function serverAufrufReducer(newState, action) {
    if (newState === undefined) return;
    window.logger.debug("1. ACTION.functionName:" + action.functionName);
    newState.UI.waitingForResponse=action.functionName;
    switch (action.functionName) {
        case 'getOrCreateDriveData':
            newState.UI.leaf = "OrdnerEinrichten";
            return;
        default:
            return;
    }
}

export default serverAufrufReducer;