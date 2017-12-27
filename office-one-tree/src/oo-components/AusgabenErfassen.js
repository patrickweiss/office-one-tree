import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import AusgabenListen from'./AusgabenListen.js';
import AusgabeErfassen from'./AusgabeErfassen.js';

class AusgabenErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Ausgaben";
    this.verb = "erfassen";
    this.path = ["ObRoot", "AusgabenErfassen"];
  }
  renderMobile() {
    return (
      <div>
        <AusgabenListen size="LIST_ITEM"/>
        <AusgabeErfassen size="LIST_ITEM"/>
      </div>
    )
  }
}
components.AusgabenErfassen = AusgabenErfassen;

export default AusgabenErfassen;