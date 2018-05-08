// eslint-disable-next-line
import React from 'react';
import { OfficeLeaf, components } from './OfficeLeaf.js';


class PhotoMachen extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject = "Photo";
    this.verb = "machen";
    this.path = [];
    this.handleChange = this.handleChange.bind(this);
    this.kontenHTML = window.store.getState().BM.ooKonto.map((konto) =>
      <button onClick={this.handleClick}>{konto}</button> 
    );
  }

  renderListItem() {
    return (
      <div className="LIST_ITEM">
         <h1>Belegfoto</h1>
    <input id="belegdatei" type="file" accept="image/*" capture="environment" onChange={this.handleChange}></input>
    <img id="beleg" src={window.store.getState().UI.belegPhoto} alt="Belegfoto" width="100%" />
      </div>
    );
  }
  
  handleChange(event) {
    console.log("zeigeBeleg");
    if (event.target.files && event.target.files[0]) {
      //Global hier definiert. hierfür muss ich noch eine bessere Lösung finden
      window.globaleBelegDatei=event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {

        window.store.dispatch({
          type: 'photo_gemacht',
          belegPhoto: e.target.result
        });

      };
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  
  
}

components.PhotoMachen=PhotoMachen;

export default PhotoMachen;