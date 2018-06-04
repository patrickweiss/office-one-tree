/*global gapi
*/

function appendPre(message) {
        window.logger.debug(message);
      }

var callScriptFunction = function (functionName,parametersArray) {
  var scriptId = "1Exwlfi4KaSGYWrZmHeq7g0YqxYcrS8LwJN_Xc3yG-7xd6P4Cj7FdsfdP";

  window.store.dispatch({type: 'Server_Aufruf',functionName:functionName});

  // Call the Apps Script API run method
  //   'scriptId' is the URL parameter that states what script to run
  //   'resource' describes the run request body (with the function name
  //              to execute)
  gapi.client.script.scripts.run({
    'scriptId': scriptId,
    'resource': {
      'function': functionName,
      'parameters' : parametersArray
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
      /***** Hier wird jetzt völlig falsch (eigentlich muss man das mit einem thunk machen...) eine Action dipatched*/
      window.store.dispatch({type: 'Server_antwortet',response: result.response.result});
    }
  });
};
window.callScriptFunction=callScriptFunction;