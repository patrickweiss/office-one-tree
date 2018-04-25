function kontoEingebenReducer(newState,action){
    newState.UI.konto=action.kontoName;
}

export default kontoEingebenReducer;