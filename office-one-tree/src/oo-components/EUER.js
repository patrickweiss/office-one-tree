// eslint-disable-next-line
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class EUER extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Einnahmeüberschuss";
    this.verb="berechnen";
    this.charactericon="EÜR";
    this.path=["ObRoot","EUER"];
  }
}
components.EUER=EUER;

export default EUER;