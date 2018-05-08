import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import BetragEingeben from'./BetragEingeben.js';
import KontoEingeben from'./KontoEingeben.js';
import PhotoMachen from'./PhotoMachen.js';
import BelegSpeichern from'./BelegSpeichern.js';


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
      <button onClick={this.handleClick} id='BetragEingeben'>{this.renderBetrag()}</button>
      <button onClick={this.handleClick} id='KontoEingeben'>{this.renderKonto()}</button>
      <button onClick={this.handleClick} id='PhotoMachen'>
      <img id="PhotoMachen" src={window.store.getState().UI.belegPhoto} alt="Belegfoto"  width="20" heigth="15"/></button>
      {this.renderSpeichern()}
      </div>
      {this.renderSeite()}
      </div>
      ) ;
  }
  renderBetrag(){
    var betrag=window.store.getState().UI.betrag;
    if (betrag===undefined)return "Betrag"; else return betrag;
  }
  renderKonto(){
    var konto=window.store.getState().UI.konto;
    if (konto===undefined)return "Konto"; else return konto;
    
  }
  renderPhoto(){
    var photo=window.store.getState().UI.photo;
    if (photo===undefined)return "Belegphoto"; else return photo;
  }
  renderSpeichern(){
    if (window.store.getState().UI.betrag && window.store.getState().UI.konto && window.store.getState().UI.belegPhoto)
     return (<button onClick={this.handleClick} id='BelegSpeichern'>Speichern</button>);
    else 
    return "";
  }
  
  renderSeite(){
    var content = window.store.getState().UI.content;
    if (content ==="KontoEingeben") return (<KontoEingeben  size="LIST_ITEM"/>);
    if (content ==="PhotoMachen") return (<PhotoMachen  size="LIST_ITEM"/>);
    if (content ==="BelegSpeichern") return (<BelegSpeichern  size="LIST_ITEM"/>);
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