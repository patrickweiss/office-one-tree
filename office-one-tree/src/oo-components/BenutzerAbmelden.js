/*global gapi*/

// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class BenutzerAbmelden extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject = "Benutzer";
    newProps.verb = "abmelden";
    newProps.charactericon = this.charactericon;
    newProps.path = "OfficeOneTeam,SelbstaendigMachen";
    this.handleAbmelden = this.handleAbmelden.bind(this);
    super.initialize(newProps);
  }
  renderListItem() {
      if (window.store.getState().UI.loggedIn) return (
        <div className="LIST_ITEM">
          <button type="button" onClick={this.handleAbmelden}>{window.store.getState().UI.user} abmelden</button>
        </div>
     );
     else return null;
  }
 
  handleAbmelden() {
    window.logger.debug("3. Event: Abmelden");
    gapi.auth2.getAuthInstance().signOut();
  }

}
components.BenutzerAbmelden = BenutzerAbmelden;



export default BenutzerAbmelden;