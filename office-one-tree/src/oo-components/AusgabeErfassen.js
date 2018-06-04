import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import BetragEingeben from'./BetragEingeben.js';
import KontoEingeben from'./KontoEingeben.js';
import PhotoMachen from'./PhotoMachen.js';
import MwStEingeben from'./MwStEingeben.js';
import GegenkontoEingeben from'./GegenkontoEingeben.js';
import BelegSpeichern from'./BelegSpeichern.js';
import BewirtungsanlassEingeben from'./BewirtungsanlassEingeben.js';



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
      <p>Neue Ausgabe erfassen</p>
      <div className="LIST_ITEM">
      <button onClick={this.handleClick} id='BetragEingeben'>{this.renderBetrag()}</button>/
      <button onClick={this.handleClick} id='KontoEingeben'>{this.renderKonto()}</button>/
      <button onClick={this.handleClick} id='MwStEingeben'>{this.renderMwSt()}</button>/
      <button onClick={this.handleClick} id='GegenkontoEingeben'>{this.renderGegenkonto()}</button>/
      <button onClick={this.handleClick} id='PhotoMachen'><img id="PhotoMachen" src={window.store.getState().UI.belegPhoto} alt="Belegfoto"  width="20" heigth="15"/></button>/
      {this.renderBewirtungsanlassButton()}
      {this.renderSpeichern()}
      </div>
      {this.renderSeite()}
      </div>
      ) ;
  }
  
  renderBewirtungsanlassButton(){
      window.logger.debug("AusgabeErfassen.renderBewirtungsanlassButton.window.store.getState().UI.konto:"+window.store.getState().UI.konto);
      window.logger.debug("window.store.getState().UI.konto === 'Bewirtungsbeleg':"+window.store.getState().UI.konto === "Obi");
      if (window.store.getState().UI.konto === "Bewirtungsbeleg") 
      return (
      <button onClick={this.handleClick} id='BewirtungsanlassEingeben'>{this.renderBewirtungsanlass()}</button>
      );
      else
      return ("");
  }
  renderBewirtungsanlass() {
    var Bewirtungsanlass = window.store.getState().UI.Bewirtungsanlass;
    if (Bewirtungsanlass === undefined) return "Bewirtungsanlass";
    else return Bewirtungsanlass;
  } 
  renderBetrag(){
    window.logger.debug("2. AusgabeErfassen.renderBetrag--------------------------------------------");
    if (window.store.getState().UI.betrag){
      window.logger.debug("2. AusgabeErfassen.renderBetrag:"+window.accounting.formatMoney(window.store.getState().UI.betrag/100));
      return window.accounting.formatMoney(window.store.getState().UI.betrag/100);
    }
    else 
     return "Betrag";
  }
  renderKonto(){
    var konto=window.store.getState().UI.konto;
    if (konto===undefined)return "Konto"; else return konto;
  }
  renderMwSt(){
    var mwst=window.store.getState().UI.MwSt;
    if (mwst===undefined)return "MwSt"; else return mwst;
  }
  renderGegenkonto(){
    var gegenkonto=window.store.getState().UI.gegenkonto;
    if (gegenkonto===undefined)return "Gegenkonto"; else return gegenkonto;
  }
  renderPhoto(){
    var photo=window.store.getState().UI.photo;
    if (photo===undefined)return "Belegphoto"; else return photo;
  }
  renderSpeichern(){
    if (window.store.getState().UI.betrag && window.store.getState().UI.konto && window.store.getState().UI.MwSt && window.store.getState().UI.belegPhoto)
     return (<p><button onClick={this.handleClick} id='BelegSpeichern'>Speichern</button></p>);
    else 
    return "";
  }
  renderSeite(){
    var content = window.store.getState().UI.content;
    if (content ==="KontoEingeben") return (<KontoEingeben  size="LIST_ITEM"/>);
    if (content ==="PhotoMachen") return (<PhotoMachen  size="LIST_ITEM"/>);
    if (content ==="MwStEingeben") return (<MwStEingeben  size="LIST_ITEM"/>);
    if (content ==="GegenkontoEingeben") return (<GegenkontoEingeben  size="LIST_ITEM"/>);
    if (content ==="BewirtungsanlassEingeben") return (<BewirtungsanlassEingeben  size="LIST_ITEM"/>);
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