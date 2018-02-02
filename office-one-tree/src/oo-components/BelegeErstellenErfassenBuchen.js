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
      <div>
        <h1 className="list-item-title">{this.subject} {this.verb}</h1>
        <div className="LIST_ITEM" id="belege-erfassen-div">
          <AusgabenBelegeErstellenErfassenBuchen  size="LIST_ITEM"/>
          <EinnahmenBelegeErstellenErfassenBuchen size="LIST_ITEM"/>
        </div>
      </div>
      );
  }
}

components.BelegeErstellenErfassenBuchen=BelegeErstellenErfassenBuchen;
export default BelegeErstellenErfassenBuchen;