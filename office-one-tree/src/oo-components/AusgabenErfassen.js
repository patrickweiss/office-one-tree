import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class AusgabenErfassen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "Ausgaben";
    this.verb="erfassen";
    this.path=["ObRoot","AusgabenErfassen"];
  }
}
components.AusgabenErfassen=AusgabenErfassen;

export default AusgabenErfassen;