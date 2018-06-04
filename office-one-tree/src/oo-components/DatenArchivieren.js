/*global gapi*/
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class DatenArchivieren extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Daten";
    this.verb="archivieren";
    this.path=["ObRoot","DatenArchivieren"];
    this.handleAnmelden = this.handleAnmelden.bind(this);
    this.handleAbmelden = this.handleAbmelden.bind(this);
  }
  renderMobile() {
    window.logger.debug("2. DatenArchivieren.renderMobile");
    var styleSichtbar =  {display: 'block'};
    var styleUnsichtbar = {display: 'none'};
    var styleAnmelden;
    var styleAbmelden;
    if (window.store.getState().UI.loggedIn){
      styleAnmelden=styleUnsichtbar;
      styleAbmelden=styleSichtbar;
    }else
    {
      styleAnmelden=styleSichtbar;
      styleAbmelden=styleUnsichtbar;
    }
    
     if (window.store.getState().UI.loggedIn)
     return (
      <div>
      <h1>Daten mit Google Drive Ordner "oo18" synchronisiert</h1>
      <h2>Aktuelles Google Konto: {window.store.getState().UI.user} </h2>
      <p>Um sich mit einem anderen Konto anzumelden, klicken Sie zuerst auf Abmelden und melden sich danach mit dem anderen Konto wieder an.</p>
      <div style={styleAnmelden}><button id="authorize-button" onClick={this.handleAnmelden}>Anmelden</button></div>
      <div style={styleAbmelden}><button id="signout-button" onClick={this.handleAbmelden}>Abmelden</button></div>
      </div>
    );
    else
    return (
      <div>
      <h1>office one 2018</h1>
      <h2>Ausgaben und Einnahmen erfassen und archivieren</h2>
      <p>Ausgaben und Einnahmen mit Beleg erfassen und in Google Drive archivieren.</p>
      <p>Um Ordner für die Belege und Tabellen zur Auswertung von Ausgaben und Einnahmen, zur Ermittlung von Gewinn und Verlust und zur Erstellung von Steuerklärungen in Google Drive anzulegen, klicken Sie den folgenden Link</p>
      <div style={styleAnmelden}><button id="authorize-button" onClick={this.handleAnmelden}>Anmelden</button></div>
      <div style={styleAbmelden}><button id="signout-button" onClick={this.handleAbmelden}>Abmelden</button></div>
      </div>
    );

  }
  
  handleAnmelden(){
    window.logger.debug("3. Event: Anmelden");
    gapi.auth2.getAuthInstance().signIn();
  }
  
  handleAbmelden(){
    window.logger.debug("3. Event: Abmelden");
    gapi.auth2.getAuthInstance().signOut();
  }
  
  componentDidMount(){
    window.logger.debug("2. DatenArchivieren.componentDidMount");

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
console.log("3. Initialisierung der Google API Konfiguration");

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
          window.accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
 
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
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
        if (isSignedIn)callScriptFunction('getOrCreateDriveData');
      }
      
 
      function appendPre(message) {
        console.log(message);
      }

  

/* Hier habe ich den Root Order Aufruf eingebaut **************************************************************************************

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