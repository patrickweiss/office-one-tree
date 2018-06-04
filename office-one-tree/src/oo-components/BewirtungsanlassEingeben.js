// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class BewirtungsanlassEingeben extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Bewirtunganlass";
    this.verb = "eingeben";
    this.path = [];
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
      <p>Was war der Anlass für dieses Geschäftsessen und welche Personen wurden eingeladen?</p>
      <textarea rows="4" cols="50">
        Besprechung, wie neue Werkstudenten an der Uni angesprochen werden können mit Rebecca Schwenger 
      </textarea>
      </div>
    );
  }
    handleClick(e) {
    var kontoName = e.target.textContent;
    window.store.dispatch({
      type: 'mwst_selected',
      mwst: kontoName
    });
  }
  
}

components.BewirtungsanlassEingeben=BewirtungsanlassEingeben;

export default BewirtungsanlassEingeben;