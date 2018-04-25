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
    var buttonStyle = {display: 'none'}
    return (
      <div>
      <h1>Daten in Google Drive archivieren</h1>
      <h2>In Google Drive anmelden</h2>
      <p>Melden Sie sich mit einem Google Account an, um die auf den Handy gespeicherten Daten in Google Drive zu sichern</p>
      <button id="authorize-button">Authorize</button>
      <button id="signout-button">Sign Out</button>
      </div>
    );
  }
  componentDidMount(){
      authorizeButton = document.getElementById('authorize-button');
      signoutButton = document.getElementById('signout-button');

    if (this.size==="MOBILE"){
      console.log("Jetzt Google API intialisieren");
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
      var SCOPES = 'https://www.googleapis.com/auth/script.projects';

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
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
        console.log(isSignedIn);
        if (isSignedIn)callScriptFunction();
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
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
function callScriptFunction() {
  var scriptId = "1Exwlfi4KaSGYWrZmHeq7g0YqxYcrS8LwJN_Xc3yG-7xd6P4Cj7FdsfdP";

  // Call the Apps Script API run method
  //   'scriptId' is the URL parameter that states what script to run
  //   'resource' describes the run request body (with the function name
  //              to execute)
  gapi.client.script.scripts.run({
    'scriptId': scriptId,
    'resource': {
      'function': 'getFoldersUnderRoot'
    }
  }).then(function(resp) {
    var result = resp.result;
    if (result.error && result.error.status) {
      // The API encountered a problem before the script
      // started executing.
      appendPre('Error calling API:');
      appendPre(JSON.stringify(result, null, 2));
    } else if (result.error) {
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
          appendPre('\t' + trace.function + ':' + trace.lineNumber);
        }
      }
    } else {
      // The structure of the result will depend upon what the Apps
      // Script function returns. Here, the function returns an Apps
      // Script Object with String keys and values, and so the result
      // is treated as a JavaScript object (folderSet).

      var folderSet = result.response.result;
      if (Object.keys(folderSet).length === 0) {
          appendPre('No folders returned!');
      } else {
        appendPre('Folders under your root folder:');
        Object.keys(folderSet).forEach(function(id){
          appendPre('\t' + folderSet[id] + ' (' + id  + ')');
        });
      }
    }
  });
}





export default DatenArchivieren;