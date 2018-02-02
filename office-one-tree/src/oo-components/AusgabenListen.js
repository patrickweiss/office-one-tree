import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class AusgabenListen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Ausgaben";
    this.verb = "listen";
    this.path = ["ObRoot", "AusgabenBelegeErstellenErfassenBuchen", "AusgabenListen"];
  }
  renderListItem() {
    return (
    <div className="LIST_ITEM" >
    Ausgabeliste kurz
    <button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button>
    </div>);
  }
}
components.AusgabenListen = AusgabenListen;

export default AusgabenListen;