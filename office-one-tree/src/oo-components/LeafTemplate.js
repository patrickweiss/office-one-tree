import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class LeafTemplate extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Template";
    this.verb="change";
    this.path=["ObRoot","LeafTemplate"];
  }
}
components.LeafTemplate=LeafTemplate;

export default LeafTemplate;