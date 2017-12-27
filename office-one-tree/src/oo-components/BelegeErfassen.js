import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import AusgabenErfassen from'./AusgabenErfassen.js';
import EinnahmenErfassen from'./EinnahmenErfassen.js';


class BelegeErfassen extends OfficeLeaf {
    constructor(props) {
    super(props);
    this.subject= "Belege";
    this.verb="erfassen";
  }
  renderListItem(){
      return (
      <div class="LIST_ITEM">
      Belege erfassen
        <AusgabenErfassen size="LIST_ITEM"/>
        <EinnahmenErfassen size="LIST_ITEM"/>
      </div>
      )
  }
}

components.BelegeErfassen=BelegeErfassen;
export default BelegeErfassen;