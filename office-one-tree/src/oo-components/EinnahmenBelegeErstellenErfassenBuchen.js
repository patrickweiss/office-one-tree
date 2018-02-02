// eslint-disable-next-line
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class EinnahmenBelegeErstellenErfassenBuchen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Einnahmen";
    this.verb=" ";
    this.path=["ObRoot","EinnahmenBelegeErstellenErfassenBuchen"];
  }
  
    renderListItem(){
      return <div className="ausgabe-erstellen-button"><button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button></div>;
  }
}
components.EinnahmenBelegeErstellenErfassenBuchen=EinnahmenBelegeErstellenErfassenBuchen;

export default EinnahmenBelegeErstellenErfassenBuchen;