import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class AusgabeErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Template";
    this.verb="change";
    this.path=["ObRoot","AusgabeErfassen"];
  }
  renderListItem(){
    return(
      <div className="LIST_ITEM">UI um Buchungssatz zu erfassen</div>
      ) ;
  }
}
components.AusgabeErfassen=AusgabeErfassen;

export default AusgabeErfassen;