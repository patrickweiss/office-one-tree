import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';



class ScalableMobileFirstArchitecture extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject= "Scalable Mobile";
    newProps.verb="First Architecture";
    newProps.path="EuropCarMobileFirst,ScalableMobileFirstArchitecture";
    newProps.charactericon = "SMFA";
  
   super.initialize(newProps);
  }
  renderMobile(){
    console.log("render ScalableMobileFirstArchitecture");
    return (
      <div>
      <h1>Scalable Mobile First Architecture</h1>
      <h2>Scalable</h2>
      <ul>
        <li>unlimited complexity</li>
        <li>unlimited users</li>
        <li>unlimited apps</li>
        <li>unlimited devices</li>
      </ul>
      <h2>Mobile First</h2>
      <ul>
      <li>mobile phone is the primary user device</li>
      <li>bigscreen only for power users</li>
      </ul>
      <h2>Architecture</h2>
      <ul>
        <li>Deterministic State Management</li>
        <li>Finite User Experience Rendering</li>
        <li>Deterministic State Synchronisation</li>
        <li>GOBD compliant documentation</li>
      </ul>
    </div>
    );
  
  }
}
components.ScalableMobileFirstArchitecture=ScalableMobileFirstArchitecture;

export default ScalableMobileFirstArchitecture;