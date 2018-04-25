// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class KontoEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Konto";
    this.verb = "eingeben";
    this.path = [];
    this.kontenHTML = window.store.getState().BM.ooKonto.map((konto) =>
      <button onClick={this.handleClick}>{konto}</button> 
    );
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
      {this.kontenHTML}
      </div>
    )
  }
  
  renderKonto(kontoName){
    console.log(kontoName);
    return(
      <button onClick={this.handleClick}>KontoName</button> 
      );
  }
  
  handleClick(e) {
    var kontoName = e.target.textContent;
    window.store.dispatch({
      type: 'konto_selected',
      kontoName: kontoName
    });
  }
  
}

components.KontoEingeben=KontoEingeben;

export default KontoEingeben;