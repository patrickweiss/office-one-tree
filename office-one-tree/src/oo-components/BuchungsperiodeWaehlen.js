import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class BuchungsperiodeWaehlen extends OfficeLeaf {
  initialize(props) {
    var newProps={};
    newProps.subject= "Buchungsperiode";
    newProps.verb="wählen";
    if (window.store.getState().UI.buchungsperiode){
      newProps.subject=window.store.getState().UI.buchungsperiode.split(" ")[1];
      newProps.verb=" ";
    }

    newProps.path="ObRoot,BuchungsperiodeWaehlen";
    super.initialize(newProps);
    if (window.store.getState().UI.buchungsperiode)this.charactericon=window.store.getState().UI.buchungsperiode.split(" ")[0];
  }
  
  renderMobile(){
    return (
        <table>
      <tbody>
     
        <tr>
          <td><button type="button" onClick={this.handleClick}>01 Januar</button></td>
          <td><button type="button" onClick={this.handleClick}>07 Juli</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={this.handleClick}>02 Februar</button></td>
          <td><button type="button" onClick={this.handleClick}>08 August</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={this.handleClick}>03 März</button></td>
          <td><button type="button" onClick={this.handleClick}>09 September</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={this.handleClick}>04 April</button></td>
          <td><button type="button" onClick={this.handleClick}>10 Oktober</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={this.handleClick}>05 Mai</button></td>
          <td><button type="button" onClick={this.handleClick}>11 November</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={this.handleClick}>06 Juni</button></td>
          <td><button type="button" onClick={this.handleClick}>12 Dezember</button></td>
        </tr>
      </tbody>
    </table> 
    );
  }
  handleClick(e){
    if (this.size==="MOBILE"){
      var monat=e.target.textContent;
      window.store.dispatch({
          type: 'change_Buchungsperiode',
          newBuchungsperiode: monat
      });
    }else super.handleClick(e);
  }
}
components.BuchungsperiodeWaehlen=BuchungsperiodeWaehlen;

export default BuchungsperiodeWaehlen;