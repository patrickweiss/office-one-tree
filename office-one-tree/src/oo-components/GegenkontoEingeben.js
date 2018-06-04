// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class GegenkontoEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Gegenkonto";
    this.verb = "eingeben";
    this.path = [];
    this.kontenHTML = window.store.getState().BM.ooGegenkonto.map((konto) => {
      return (<div className="LIST_ITEM"><button onClick={this.handleClick}>{konto}</button></div>);
    });
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
      <p>Wie wurde die Ausgabe bezahlt?</p>
      {this.kontenHTML}
      </div>
    );
  }
  
  handleClick(e) {
    var kontoName = e.target.textContent;
    window.store.dispatch({
      type: 'gegenkonto_selected',
      gegenkonto: kontoName
    });
  }
  
}

components.GegenkontoEingeben=GegenkontoEingeben;

export default GegenkontoEingeben;