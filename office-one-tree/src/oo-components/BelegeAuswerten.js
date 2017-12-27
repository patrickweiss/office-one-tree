import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import UStVA from'./UStVA.js';
import EUER from'./EUER.js';
import BilanzBerechnen from'./BilanzBerechnen.js';


class BelegeAuswerten extends OfficeLeaf {
    constructor(props) {
    super(props);
    this.subject= "Belege";
    this.verb="auswerten";
  }
    renderListItem(){
      return (
      <div className="LIST_ITEM">
      Belege auswerten
        <UStVA size="LIST_ITEM"/>
        <EUER size="LIST_ITEM"/>
        <BilanzBerechnen size="LIST_ITEM"/>
      </div>
      )
  }
}

components.BelegeAuswerten=BelegeAuswerten;
export default BelegeAuswerten;