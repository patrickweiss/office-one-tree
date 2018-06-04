// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class MwStEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "MwSt";
    this.verb = "eingeben";
    this.path = [];
    this.kontenHTML = window.store.getState().BM.ooMwSt.map((konto) => {
      return (<div className="LIST_ITEM"><button onClick={this.handleClick}>{konto}</button></div>);
    });
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
      <p>Wieviel Mehrwertsteuer ist im Betrag enthalten?</p>
      {this.kontenHTML}
      </div>
    );
  }
  handleClick(e) {
    var kontoName = e.target.textContent;
    window.store.dispatch({
      type: 'mwst_selected',
      mwst: kontoName
    });
  }
  
}

components.MwStEingeben=MwStEingeben;

export default MwStEingeben;