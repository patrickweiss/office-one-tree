/*global gapi*/
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class DatenArchivieren extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Daten";
    this.verb="archivieren";
    this.path=["ObRoot","DatenArchivieren"];
  }
  renderMobile() {
    window.logger.debug("2. DatenArchivieren.renderMobile");
     return (
      <div>
      <h1>Daten in Google Drive archivieren</h1>
      <h2>In Google Drive anmelden</h2>
      <p>Melden Sie sich mit einem Google Account an, um die auf dem Handy gespeicherten office one Daten in Google Drive zu sichern</p>
      <button id="authorize-button">Anmelden</button>
      <button id="signout-button">Abmelden</button>
      </div>
    );
    

  }
  componentDidMount(){
    window.logger.debug("2. DatenArchivieren.componentDidMount");
      authorizeButton = document.getElementById('authorize-button');
      signoutButton = document.getElementById('signout-button');
    if (this.size==="MOBILE" && window.store.getState().UI.loggedIn===false){
      handleClientLoad();
    }
  }
}
components.DatenArchivieren=DatenArchivieren;



/**************************************** hier kommt jetzt erst mal der Google Kram, kann man hinterher refactorn
 * */
 
 
     // Client ID and API key from the Developer Console
      var CLIENT_ID = "231574892308-jrng78q9behcs4lbsl85pu0jugqb6vc6.apps.googleusercontent.com";
      var API_KEY = "AIzaSyBAh6zYniTB-LOJssXydgmx621-CoRM-Xw";
      

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = 'https://www.googleapis.com/auth/script.projects https://mail.google.com/ https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/script.container.ui https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.email';
      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        window.logger.debug("handleClientLoad");
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        window.logger.debug("initClient");
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        window.logger.debug("UpdateSigninStatus");
        window.store.dispatch({
          type: 'update_signin_status',
          isSignedIn: isSignedIn
        });
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          callScriptFunction('getOrCreateDriveData');
        }
        else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }
      
      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        window.logger.debug("handleAuthClick");
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        window.logger.debug("handleSignoutClick");
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        console.log(message);
      }

  

/* Hier habe ich den Root Order Aufrug eingebaut **************************************************************************************

*/
/**
 * Load the API and make an API call.  Display the results on the screen.
 */
function callScriptFunction(functionName) {
  var scriptId = "1Exwlfi4KaSGYWrZmHeq7g0YqxYcrS8LwJN_Xc3yG-7xd6P4Cj7FdsfdP";

  window.store.dispatch({type: 'Server_Aufruf',functionName});

  // Call the Apps Script API run method
  //   'scriptId' is the URL parameter that states what script to run
  //   'resource' describes the run request body (with the function name
  //              to execute)
  gapi.client.script.scripts.run({
    'scriptId': scriptId,
    'resource': {
      'function': functionName
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
}




export default DatenArchivieren;