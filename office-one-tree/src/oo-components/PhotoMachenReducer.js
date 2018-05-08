function photoMachenReducer(newState,action){
    newState.UI.belegPhoto=action.belegPhoto;
    newState.UI.beledDatei=action.belegDatei;
}

export default photoMachenReducer;