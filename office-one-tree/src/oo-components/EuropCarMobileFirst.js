import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import ScalableMobileFirstArchitecture from './ScalableMobileFirstArchitecture.js';



class EuropCarMobileFirst extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject= "EuropCar";
    newProps.verb="MobileFirst";
    newProps.path="EuropCarMobileFirst";
    newProps.charactericon = "ECMF";
  
   super.initialize(newProps);
  }
  renderMobile(){
    console.log("render EuropCarMobileFirst");
    return (
      <div>
      <h1>Europcar</h1>
      <ScalableMobileFirstArchitecture size="LIST_ITEM"/>
    </div>
    );
  
  }
}
components.EuropCarMobileFirst=EuropCarMobileFirst;

export default EuropCarMobileFirst;