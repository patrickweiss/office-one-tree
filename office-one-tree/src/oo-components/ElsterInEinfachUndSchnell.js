import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';



class OfficeOne2018 extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "office one";
    this.verb="2018";
    this.path=["ObRoot","OfficeOne2018"];
  }
  renderMobile(){
    console.log("renderMobile");
    return (
      <div>
      <h1>Elster in einfach und schnell</h1>
      <h2>Ausgaben und Einnahmen erfassen und archivieren</h2>
      <p>Ausgaben und Einnahmen mit Beleg erfassen und in Google Drive archivieren.</p>
    
      </div>
    );
  
  }
}
components.OfficeOne2018=OfficeOne2018;

export default OfficeOne2018;