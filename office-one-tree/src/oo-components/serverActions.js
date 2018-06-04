/*global gapi */
import MediaUploader from'./uploader.js';

// entspricht https://redux.js.org/advanced/async-actions  actions.js --> export function fetchPosts(subreddit)


function belegBuchenActionCreator(serverResponse) {
    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        window.logger.debug("1. belegBuchenActionCreator.dispatch --> Action vor dem Serveraufruf");
        dispatch({
            type: 'beleg_buchen',
            serverResponse: serverResponse
        });
        dispatch(serverAufrufen({
            functionName: "addItemToTableBySpreadsheetIdAndTableName",
            parametersArray: [window.store.getState().BM.ooAusgaben[1],window.store.getState().BM.serverState.ooAusgaben.spreadsheetId, "Ausgaben"]
        }));
    };
}

export function belegSpeichernActionCreator() {


    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        window.logger.debug("1. belegSpeichernActionCreator.dispatch --> Action vor dem Serveraufruf");
        dispatch({ type: 'beleg_speichern' });
        
        
        //Datei hochladen --------------------------------------------------------------------
    var folderId=window.store.getState().BM.serverState.ooAusgabenPeriodenOrdner[
        window.store.getState().UI.buchungsperiode.split(" ")[0]
        ].ooFolderId;

    var metadata = {
        name: window.store.getState().UI.konto+" "+window.accounting.formatMoney(window.store.getState().UI.betrag/100),
        konto: window.store.getState().UI.konto,
        betrag: window.store.getState().UI.betrag/100
    };

    var fileMetadata = {
        "title": metadata.name,
        parents: [{ id: folderId }],
        description: JSON.stringify(metadata)
    };

    var uploader = new MediaUploader({
        file: window.globaleBelegDatei,
        token: window.accessToken,
        metadata: fileMetadata,
            onComplete: function(data) {
                window.logger.debug("1. belegSpeichernActionCreator.MediaUploader.onComplete.dispatch --> Action nach Dateiupload");
                dispatch(belegBuchenActionCreator(data));

            }
    });
    uploader.upload();
    };

}

export function serverAufrufen(action) {

    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        window.logger.debug("1. serverAufrufen.dispatch --> Action vor dem Serveraufruf");
        dispatch({
            type: 'Server_Aufruf',
            functionName: action.functionName
        });

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        var scriptId = "1Exwlfi4KaSGYWrZmHeq7g0YqxYcrS8LwJN_Xc3yG-7xd6P4Cj7FdsfdP";

        function appendPre(message) {
            window.logger.debug("1. thunk.gapi: "+message);
        }


        window.logger.debug("1. thunk.gapi.client.script.scripts.run");
        window.logger.debug("1. action.functionName"+action.functionName);
        window.logger.debug("1. action.parametersArray"+JSON.stringify(action.parametersArray));
        return gapi.client.script.scripts.run({
            'scriptId': scriptId,
            'resource': {
                'function': action.functionName,
                'parameters': action.parametersArray
            }
        }).then(function(resp) {
            var result = resp.result;
            if (result.error && result.error.status) {
                // The API encountered a problem before the script
                // started executing.
                appendPre('Error calling API:');
                appendPre(JSON.stringify(result, null, 2));
            }
            else if (result.error) {
                // The API executed, but the script returned an error.
                // Extract the first (and only) set of error details.
                // The values of this object are the script's 'errorMessage' and
                // 'errorType', and an array of stack trace elements.
                var error = result.error.details[0];
                appendPre('Script error message: ' + error.errorMessage);

                if (error.scriptStackTraceElements) {
                    // There may not be a stacktrace if the script didn't start
                    // executing.
                    appendPre('Script error stacktrace:');
                    for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
                        var trace = error.scriptStackTraceElements[i];
                        appendPre('\t' + trace.function+':' + trace.lineNumber);
                    }
                }
            }
            else {
                appendPre(result.response.result);
                /***** Hier wird jetzt RICHTIG mit thunk eine Action dipatched*/
                 window.logger.debug("1. serverAufrufen.dispatch --> Action für Serverantwort");
                 dispatch({ type: 'Server_antwortet', response: result.response.result });
            }
        });
    };
}
