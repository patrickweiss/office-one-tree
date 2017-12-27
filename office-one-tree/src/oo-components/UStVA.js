import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class UStVA extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Umsatzsteuer";
    this.verb="voranmelden";
    this.path=["ObRoot","UStVA"];
  }
}
components.UStVA=UStVA;

export default UStVA;