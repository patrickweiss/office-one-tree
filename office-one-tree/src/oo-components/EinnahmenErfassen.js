// eslint-disable-next-line
import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class EinnahmenErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Einnahmen";
    this.verb="erfassen";
    this.path=["ObRoot","EinnahmenErfassen"];
  }
}
components.EinnahmenErfassen=EinnahmenErfassen;

export default EinnahmenErfassen;