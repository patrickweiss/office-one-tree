// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';
import {belegSpeichernActionCreator} from './serverActions.js';

class BelegSpeichern extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Beleg";
    this.verb = "speichern";
    this.path = [];
  }
  renderListItem() {
      return (
        <div className="LIST_ITEM">
       <h1>Beleg wird in Google Drive gespeichert</h1>
      </div>
      );
  }
  componentDidMount() {
    window.logger.debug("2. BelegSpeichern.componentDidMount");
    if (window.store.getState().UI.loggedIn === true) {
      window.store.dispatch(
        belegSpeichernActionCreator()
      );

     
     // window.store.dispatch({type: 'beleg_speichern'});
    }
  }
}
components.BelegSpeichern = BelegSpeichern;

export default BelegSpeichern;