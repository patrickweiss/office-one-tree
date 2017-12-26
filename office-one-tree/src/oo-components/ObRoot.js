import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class ObRoot extends OfficeLeaf {
    constructor(props) {
    super(props);
    this.subject= "Branch";
    this.verb="grows";
  }
}
console.log("OBRoot declaration:");
console.log(components);
components.ObRoot=ObRoot;
console.log(components);
export default ObRoot;