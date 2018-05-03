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
      <h1>Ordner einrichten</h1>
      <h2>Archivordner werden in Google Drive angelegt</h2>
      <p>... lustiger Text ...</p></div>
    );
  
  }
}
components.OrdnerEinrichten=OrdnerEinrichten;

export default OrdnerEinrichten;