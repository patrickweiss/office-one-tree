import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class OrdnerEinrichten extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Ordner";
    this.verb="einrichten";
    this.path=["ObRoot","OrdnerEinrichten"];
  }
  renderMobile(){
    return(
      <div>
      <h1>Daten mit Google Drive synchronisieren</h1>
      <h2>Belegdaten werden aus Goolge Drive geladen</h2>
      <p>Beim ersten Aufruf von office one 2018 werden in Google Drive Ordner und Tabellen angelegt. Dies kann bis zu 2 Minuten dauern.</p></div>
    );
  
  }
}
components.OrdnerEinrichten=OrdnerEinrichten;

export default OrdnerEinrichten;