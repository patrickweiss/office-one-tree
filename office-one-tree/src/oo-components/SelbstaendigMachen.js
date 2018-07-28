/*global gapi*/

// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class SelbstaendigMachen extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject = "Selbständig";
    newProps.verb = "machen";
    newProps.charactericon = this.charactericon;
    newProps.path = "OfficeOneTeam,SelbstaendigMachen";
    this.handleAnmelden = this.handleAnmelden.bind(this);
    this.handleAbmelden = this.handleAbmelden.bind(this);
    super.initialize(newProps);
  }
  renderListItem() {
    return <li><button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button></li>;
  }
  renderMobile() {
    window.logger.debug("2. SelbstaendigMachen.renderMobile");
    var styleSichtbar = { display: 'block' };
    var styleUnsichtbar = { display: 'none' };
    var styleAnmelden;
    var styleAbmelden;
    if (window.store.getState().UI.loggedIn) {
      styleAnmelden = styleUnsichtbar;
      styleAbmelden = styleSichtbar;
    }
    else {
      styleAnmelden = styleSichtbar;
      styleAbmelden = styleUnsichtbar;
    }

    var driveLink = (
      <ul>
        <li>Ihr Google Drive Ordner "Selbständig machen" wird angelegt.</li>
        <li>Anleitungen wie Sie sich selbständig machen werden in den Ordner kopiert.</li>
        <li>Dieser Vorgang kann bis zu einer Minute dauern. Wenn der Vorgang angeschlossen ist, erscheint an dieser Stelle ein Link zum Öffnen des Ordners in Google Drive</li>
      </ul>
    );
    if (window.store.getState().BM.ooselbstaendigMachenFolderId){
      var link = "https://drive.google.com/drive/folders/"+window.store.getState().BM.ooselbstaendigMachenFolderId;
      driveLink=<a href={link}>Ordner "Selbständig machen" in Google Drive öffnen</a>;
    } 
    
    if (window.store.getState().UI.loggedIn) return (
      <div>
      <h1>Selbständig machen</h1>
     
      {driveLink}
      </div>
    );
    else
      return (
     <div>
      <h1>Selbständig machen</h1>
      <ul>
      <li>Melden sie sich mit Ihrem Google Account an.</li>
      <li>Nach der Anmeldung wird in ihrem Google Drive der Ordner "OfficeOneTeam" angelegt.</li>
      <li>In diesem Ordner gibt es den Ordner "Selbständig machen".</li>
      <li>In diesem Ordner finden sie die Präsentationen:
        <ol>
          <li><a href="https://docs.google.com/presentation/d/1imJK_AwxCUhbeQLkAvMzr-Zc-uWIK3nGsr3aWjjc51U">finanziell unabhängig werden</a></li>
          <li><a href="https://docs.google.com/presentation/d/10ew4uDwdBfVJa-HJFfIT7YbwnRH0IioV42vg9W-JTA0">selbständig machen</a></li>
          <li><a href="https://docs.google.com/presentation/d/12nrp8ro5LIjIvLJWDh3Hy5fNMrN0DrAeH70SN5-hSU0">weiter entwickeln</a></li>
          <li><a href="https://docs.google.com/presentation/d/1yEldcig3nH3Bb82uEvwPQkYtBDvgk7XTBBWryLcdf7A">Verfahrensdokumentation</a></li>
          <li><a href="https://docs.google.com/presentation/d/1Na7C9v1rIXJgmbG3Jn2wLC_Ko2Yek6PtgwYiIC9iU1k">Schwarz auf Weiss AG</a></li>
        </ol>
      </li>
      </ul>
      <div style={styleAnmelden}><button id="authorize-button" onClick={this.handleAnmelden}>Mit Google Account anmelden, um Präsentationen in ihr Google Drive zu kopieren</button></div>
      <div style={styleAbmelden}><button id="signout-button" onClick={this.handleAbmelden}>Abmelden</button></div>
      
      </div>
      );
  }

  handleAnmelden() {
    window.logger.debug("3. Event: selbstaendigMachenActionCreator");
    window.store.dispatch(selbstaendigMachenActionCreator());
  }

  handleAbmelden() {
    window.logger.debug("3. Event: Abmelden");
    gapi.auth2.getAuthInstance().signOut();
  }

}
components.SelbstaendigMachen = SelbstaendigMachen;


function selbstaendigMachenActionCreator() {
    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        window.logger.debug("1. function_waiting_for_signin --> getOrCreateSelbstaendigMachen");
        dispatch({
            type: 'function_waiting_for_signin',
            functionWaitingForSignIn: 'getOrCreateSelbstaendigMachen'
        });
       gapi.auth2.getAuthInstance().signIn();
    };
}


export default SelbstaendigMachen;