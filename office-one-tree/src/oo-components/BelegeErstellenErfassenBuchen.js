import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import AusgabenBelegeErstellenErfassenBuchen from'./AusgabenBelegeErstellenErfassenBuchen.js';
import EinnahmenBelegeErstellenErfassenBuchen from'./EinnahmenBelegeErstellenErfassenBuchen.js';


class BelegeErstellenErfassenBuchen extends OfficeLeaf {
    initialize(props) {
    var newProps={};
    newProps.subject= "Belege";
    newProps.verb="erstellen, erfassen, buchen";
    super.initialize(newProps);
  }

  renderListItem(){
      return (
      <div className="LIST_ITEM">
        <h1>{this.subject} {this.verb}</h1>
          <AusgabenBelegeErstellenErfassenBuchen  size="LIST_ITEM"/>
          <EinnahmenBelegeErstellenErfassenBuchen size="LIST_ITEM"/>
      </div>
      );
  }
}

components.BelegeErstellenErfassenBuchen=BelegeErstellenErfassenBuchen;
export default BelegeErstellenErfassenBuchen;