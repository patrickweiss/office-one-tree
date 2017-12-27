import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class BilanzBerechnen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Bilanz";
    this.verb="berechnen";
    this.path=["ObRoot","BilanzBerechnen"];
  }
}
components.BilanzBerechnen=BilanzBerechnen;

export default BilanzBerechnen;