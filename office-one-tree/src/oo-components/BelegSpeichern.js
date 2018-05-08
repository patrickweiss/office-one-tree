// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';
class BelegSpeichern extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Beleg";
    this.verb = "speichern";
    this.path = [];
  }
  renderListItem() {
    if (window.store.getState().UI.loggedIn === true)
      return (
        <div className="LIST_ITEM">
       <h1>Beleg wird in Google Drive gespeichert</h1>
      </div>
      );
    else
      return (
        <div className="LIST_ITEM">
        <h1>Beleg wird auf dem Handy gespeichert</h1>
      </div>
      );

  }
  componentDidMount() {
    window.logger.debug("2. BelegSpeichern.componentDidMount");
    if (window.store.getState().UI.loggedIn === true) {
      window.store.dispatch({
        type: 'beleg_speichern'
      });


    }
  }
}
components.BelegSpeichern = BelegSpeichern;

export default BelegSpeichern;