import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import AusgabenListen from'./AusgabenListen.js';
import AusgabeErfassen from'./AusgabeErfassen.js';

class AusgabenBelegeErstellenErfassenBuchen extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject = "Ausgaben";
    newProps.verb = "erfassen";
    newProps.charactericon = this.charactericon;
    newProps.path = "OfficeOneTeam,AusgabenBelegeErstellenErfassenBuchen";
    super.initialize(newProps);
 
  }
  
  renderListItem(){
        return <li><button type="button" onClick={this.handleClick}>{this.subject} {this.verb}</button></li>;
  }
  
  handleClick(e) {
    window.logger.debug("3. Event:" + this.constructor.name);
    
    if (window.store.getState().UI.buchungsperiode)
    window.store.dispatch({
      type: 'change_leaf',
      newLeaf: this.constructor.name
    });
    else
    window.store.dispatch({
      type: 'change_leaf',
      newLeaf: 'BuchungsperiodeWaehlen'
    });
    
  }
  
  
  renderMobile() {
  
    return (
      <div>
        <AusgabenListen  size="LIST_ITEM"/>
        <AusgabeErfassen size="LIST_ITEM"/>
      </div>
    );
  }
  
  
  
}
components.AusgabenBelegeErstellenErfassenBuchen = AusgabenBelegeErstellenErfassenBuchen;

export default AusgabenBelegeErstellenErfassenBuchen;