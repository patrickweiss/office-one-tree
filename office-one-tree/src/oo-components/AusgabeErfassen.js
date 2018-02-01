import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class AusgabeErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Template";
    this.verb="change";
    this.path=["ObRoot","AusgabeErfassen"];
    this.betrag="Betrag";
    this.konto="Konto";
    this.state={seite:"Initialisiert"};
    this.handleBetrag=this.handleBetrag.bind(this);
    this.handleKonto=this.handleKonto.bind(this);
  }
  renderListItem(){
    return(
      <div>
      <div className="LIST_ITEM">
      <button onClick={this.handleBetrag}>{this.betrag}</button><button onClick={this.handleKonto}>{this.konto}</button>
      
      </div>
      <div className="LIST_ITEM">
      {this.state.seite}
      </div>
      </div>
      ) ;
  }
  handleBetrag(){
    this.setState({seite:"Betrag"});
  }
  handleKonto(){
    this.setState({seite:"Konto"});
  }
}
components.AusgabeErfassen=AusgabeErfassen;

export default AusgabeErfassen;