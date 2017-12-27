import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import BelegeAuswerten from'./BelegeAuswerten.js';
import BelegeErfassen from'./BelegeErfassen.js';

class ObRoot extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "office";
    this.verb="one";
    this.path=["ObRoot"];
  }
  renderMobile(){
      return (
          <div>
            <BelegeErfassen size="LIST_ITEM"/>
            <BelegeAuswerten size="LIST_ITEM"/>
          </div>
          )
  }
}
components.ObRoot=ObRoot;
export default ObRoot;