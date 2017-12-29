// eslint-disable-next-line
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class EinnahmenBelegeErstellenErfassenBuchen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Einnahmenbelege";
    this.verb="erstellen, erfassen, buchen";
    this.path=["ObRoot","EinnahmenBelegeErstellenErfassenBuchen"];
  }
}
components.EinnahmenBelegeErstellenErfassenBuchen=EinnahmenBelegeErstellenErfassenBuchen;

export default EinnahmenBelegeErstellenErfassenBuchen;