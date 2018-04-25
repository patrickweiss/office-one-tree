import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import BetragEingeben from'./BetragEingeben.js';
import KontoEingeben from'./KontoEingeben.js';

class AusgabeErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Template";
    this.verb="change";
    this.path=["ObRoot","AusgabeErfassen"];
    this.handleClick=this.handleClick.bind(this);
  }
  renderListItem(){
    return(
      <div className="LIST_ITEM">
      <div className="LIST_ITEM">
      <p>Neue Ausgabe erfassen</p>
      <button onClick={this.handleClick} id='BetragEingeben'>{this.renderBetrag()}</button><button onClick={this.handleClick} id='KontoEingeben'>{this.renderKonto()}</button>
      </div>
      {this.renderSeite()}
      </div>
      ) ;
  }
  
  renderBetrag(){
    var betrag=window.store.getState().UI.betrag;
    console.log(betrag);
    if (betrag===undefined)return "Betrag"; else return betrag;
    
  }
  
  
  renderKonto(){
    var konto=window.store.getState().UI.konto;
    if (konto===undefined)return "Konto"; else return konto;
    
  }
  renderSeite(){
    var content = window.store.getState().UI.content;
    if (content ==="KontoEingeben") return (<KontoEingeben  size="LIST_ITEM"/>);
    
    return (<BetragEingeben  size="LIST_ITEM"/>);
  }
  

  handleClick(e) {
    window.store.dispatch({
      type: 'change_leaf_content',
      content: e.target.id
    });
  }
  
}
components.AusgabeErfassen=AusgabeErfassen;

export default AusgabeErfassen;