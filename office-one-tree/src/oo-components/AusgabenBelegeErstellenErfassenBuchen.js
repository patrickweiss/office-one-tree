import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import AusgabenListen from'./AusgabenListen.js';
import AusgabeErfassen from'./AusgabeErfassen.js';

class AusgabenBelegeErstellenErfassenBuchen extends OfficeLeaf {
  initialize(props) {
    var newProps={};
    newProps.subject = "Ausgaben";
    newProps.verb = " ";
    newProps.path = "ObRoot,AusgabenBelegeErstellenErfassenBuchen";
    super.initialize(newProps);
    this.charactericon="Au";
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
components.AusgabenBelegeErstellenErfassenBuchen = AusgabenBelegeErstellenErfassenBuchen;

export default AusgabenBelegeErstellenErfassenBuchen;