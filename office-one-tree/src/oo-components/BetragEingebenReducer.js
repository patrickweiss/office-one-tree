function betragEingebenReducer(newState,action){
    if (newState.UI.betrag===undefined)newState.UI.betrag="";
    newState.UI.betrag+=action.character;
    if (action.character==="<"){
        if (newState.UI.betrag.length>1)newState.UI.betrag = newState.UI.betrag.substring(0, newState.UI.betrag.length - 2);
    }
}

export default betragEingebenReducer;