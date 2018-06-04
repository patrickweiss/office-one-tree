// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class KontoEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Konto";
    this.verb = "eingeben";
    this.path = [];

    if (window.store.getState().BM.serverState) {
     this.kontenHTML = [];
     var ooKonten = window.store.getState().BM.serverState.ooKonten;
     for (var konto in ooKonten)
     {
       this.kontenHTML.push(<div className="LIST_ITEM" key={konto} id={konto} onClick={this.handleClick}><button id={konto}>{ooKonten[konto]["Konto"]} {ooKonten[konto]["Standard MwSt."]}</button></div>);
     }
    }
    else {
      this.kontenHTML = window.store.getState().BM.ooKonto.map((konto) => {
        return (<div className="LIST_ITEM"><button onClick={this.handleClick}>{konto}</button></div>);
      });
    }
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
      <p>Konto auswählen</p>
      {this.kontenHTML}
      </div>
    );
  }
  
  handleClick(e) {
    var kontoName = e.target.getAttribute('id');
    window.store.dispatch({
      type: 'konto_selected',
      kontoName: kontoName
    });
  }
  
}

components.KontoEingeben=KontoEingeben;

export default KontoEingeben;