import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';
import BelegeAuswerten from './BelegeAuswerten.js';
import BelegeErstellenErfassenBuchen from './BelegeErstellenErfassenBuchen.js';
import BuchungsperiodeWaehlen from './BuchungsperiodeWaehlen.js';

class ObRoot extends OfficeLeaf {
  initialize(props) {
    var newProps = {};
    newProps.subject = "office one";
    newProps.verb = "2018";
    newProps.path = "ObRoot";
    super.initialize(newProps);
    this.charactericon = "oo18";
  }
  handleClick(e) {
    if (window.store.getState().UI.leaf==="ObRoot"){
      window.store.dispatch({
          type: 'change_leaf',
          newLeaf: 'OfficeOne2018'
      });
    }else super.handleClick();
  }
  renderMobile() {

    if (window.store.getState().UI.buchungsperiode)
      return (
        <div>
            <BelegeErstellenErfassenBuchen size="LIST_ITEM"/>
            <BelegeAuswerten size="LIST_ITEM"/>
          </div>
      );
    else
      return (
        <div>
            <BuchungsperiodeWaehlen size="LIST_ITEM"/>
          </div>
      );
  }
}
components.ObRoot = ObRoot;
export default ObRoot;